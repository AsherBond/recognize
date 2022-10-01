<?php

namespace OCA\Recognize\Db;

use OCA\Recognize\Classifiers\Audio\MusicnnClassifier;
use OCA\Recognize\Classifiers\Images\ClusteringFaceClassifier;
use OCA\Recognize\Classifiers\Images\ImagenetClassifier;
use OCA\Recognize\Classifiers\Images\LandmarksClassifier;
use OCA\Recognize\Classifiers\Video\MovinetClassifier;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

class QueueMapper extends QBMapper {
	public const MODELS = [
		ImagenetClassifier::MODEL_NAME,
		ClusteringFaceClassifier::MODEL_NAME,
		LandmarksClassifier::MODEL_NAME,
		MovinetClassifier::MODEL_NAME,
		MusicnnClassifier::MODEL_NAME
	];

	/**
	 * @var IDBConnection $db
	 */
	protected $db;

	public function __construct(IDBConnection $db) {
		parent::__construct($db, '', QueueFile::class);
	}

	public function getTableName():string {
		throw new \Exception('Invalid invokation: This class handles multiple tables');
	}

	private function getQueueTable(string $model) {
		return 'recognize_queue_'.$model;
	}

	/**
	 * @param string $model
	 * @param int $storageId
	 * @param int $n
	 * @return \OCA\Recognize\Db\QueueFile[]
	 * @throws \OCP\DB\Exception
	 */
	public function getFromQueue(string $model, int $storageId, int $rootId, int $n) : array {
		$qb = $this->db->getQueryBuilder();
		$qb->select(QueueFile::$columns)
			->from($this->getQueueTable($model))
			->where($qb->expr()->eq('storage_id', $qb->createPositionalParameter($storageId, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->eq('root_id', $qb->createPositionalParameter($rootId, IQueryBuilder::PARAM_INT)))
			->setMaxResults($n);

		return $this->findEntities($qb);
	}

	/**
	 * @param string $model
	 * @param \OCA\Recognize\Db\QueueFile $file
	 * @return void
	 * @throws \OCP\DB\Exception
	 */
	public function removeFromQueue(string $model, QueueFile $file) : void {
		$qb = $this->db->getQueryBuilder();
		$qb->delete($this->getQueueTable($model))
			->where($qb->expr()->eq('id', $qb->createPositionalParameter($file->getId())))
			->executeStatement();
	}

	/**
	 * @param int $fileId
	 * @return void
	 * @throws \OCP\DB\Exception
	 */
	public function removeFileFromAllQueues(int $fileId) : void {
		foreach (self::MODELS as $model) {
			$qb = $this->db->getQueryBuilder();
			$qb->delete($this->getQueueTable($model))
				->where($qb->expr()->eq('file_id', $qb->createPositionalParameter($fileId)))
				->executeStatement();
		}
	}

	/**
	 * @param string $model
	 * @param \OCA\Recognize\Db\QueueFile $file
	 * @return \OCA\Recognize\Db\QueueFile
	 * @throws \OCP\DB\Exception
	 */
	public function insertIntoQueue(string $model, QueueFile $file) : QueueFile {
		$qb = $this->db->getQueryBuilder();
		$qb->insert($this->getQueueTable($model))
			->values([
				'file_id' => $qb->createPositionalParameter($file->getFileId(), IQueryBuilder::PARAM_INT),
				'storage_id' => $qb->createPositionalParameter($file->getStorageId(), IQueryBuilder::PARAM_INT),
				'root_id' => $qb->createPositionalParameter($file->getRootId(), IQueryBuilder::PARAM_INT),
				'update' => $qb->createPositionalParameter($file->getUpdate(), IQueryBuilder::PARAM_BOOL)
			])
			->executeStatement();
		$file->setId($qb->getLastInsertId());
		return $file;
	}

	public function clearQueue(string $model) {
		$qb = $this->db->getQueryBuilder();
		$qb->delete($this->getQueueTable($model))->executeStatement();
	}

	public function count(string $model) : int {
		$qb = $this->db->getQueryBuilder();
		$result = $qb->select($qb->func()->count('id'))
			->from($this->getQueueTable($model))
			->executeQuery();
		return $result->fetchOne(\PDO::FETCH_COLUMN);
	}
}