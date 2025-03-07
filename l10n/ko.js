OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Recognize",
    "Smart media tagging and face recognition with on-premises machine learning models" : "온프레미스 기계 학습 모델을 사용한 스마트 미디어 태깅 및 얼굴 인식",
    "Smart media tagging and face recognition with on-premises machine learning models.\nThis app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* 🎥 🤸 Recognizes human actions on video\n\n⚡ Tagging works via Nextcloud's Collaborative Tags\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos and videos with the photos app\n\nModel sizes:\n\n * Object recognition: 1GB\n * Landmark recognition: 300MB\n * Video action recognition: 50MB\n * Music genre recognition: 50MB\n\n## Ethical AI Rating\n### Rating for Photo object detection: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Photo face recognition: 🟢\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n### Rating for Video action recognition: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n## Ethical AI Rating\n### Rating Music genre recognition: 🟡\n\nPositive:\n* the software for training and inference of this model is open source\n* the trained model is freely available, and thus can be run on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; FreeBSD, Alpine linux and thus also the official Nextcloud Docker container and Nextcloud AIO are *not* such systems)\n- For sub-native speed (using WASM mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux and thus also the official Nextcloud Docker container and also Nextcloud AIO)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n- This app is currently incompatible with the *Suspicious Login* app due to a dependency conflict (ie. you can only have one of the two installed)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js." : "온프레미스 기계 학습 모델을 사용한 스마트 미디어 태깅 및 얼굴 인식\n이 앱은 미디어 컬렉션을 훑어 맞춤 태그를 추가하고 사진과 음악을 자동으로 분류합니다.\n\n- 📷 👪 연락처 사진을 통해 얼굴을 식별함\n- 📷 🏔 동물, 풍경, 음식, 차량, 건물 및 기타 객체 인식\n- 📷 🗼 랜드마크 및 기념물 인식\n- 👂 🎵 음악 장르 인식\n- 🎥 🤸 비디오에서 사람의 행동 인식\n\n⚡ 태깅은 Nextcloud의 Collaborative Tags를 통해 작동합니다.\n\n- 👂 오디오 플레이어 앱을 사용하여 태그된 음악 듣기\n- 📷 Photos 앱을 사용하여 태그된 사진과 비디오 보기\n\n모델 크기:\n\n- 객체 인식: 1GB\n- 랜드마크 인식: 300MB\n- 비디오 행동 인식: 50MB\n- 음악 장르 인식: 50MB\n\n## AI 윤리 등급\n\n### 사진 객체 인식 등급: 🟢\n\n긍정적:\n\n- 이 모델의 학습 및 추론 소프트웨어는 오픈 소스입니다.\n- 학습된 모델은 무료로 사용 가능하므로 온프레미스에서 실행할 수 있습니다.\n- 학습 데이터는 무료로 제공되므로 bias를 확인 및 보정하거나, 최적화를 통해 더 좋은 성능을 이끌어내거나 CO2 배출량을 감소시킬 수 있습니다.\n\n### 사진 얼굴 인식 등급: 🟢\n\n긍정적:\n\n- 이 모델의 학습 및 추론 소프트웨어는 오픈 소스입니다.\n- 학습된 모델은 무료로 사용 가능하므로 온프레미스에서 실행할 수 있습니다.\n- 학습 데이터는 무료로 제공되므로 bias를 확인 및 보정하거나, 최적화를 통해 더 좋은 성능을 이끌어내거나 CO2 배출량을 감소시킬 수 있습니다.\n\n### 비디오 행동 인식 등급: 🟢\n\n긍정적:\n\n- 이 모델의 학습 및 추론 소프트웨어는 오픈 소스입니다.\n- 학습된 모델은 무료로 사용 가능하므로 온프레미스에서 실행할 수 있습니다.\n- 학습 데이터는 무료로 제공되므로 bias를 확인 및 보정하거나, 직접 최적화를 통해 더 좋은 성능을 이끌어내거나 CO2 배출량을 감소시킬 수 있습니다.\n\n## AI 윤리 등급\n\n### 음악 장르 인식 등급: 🟡\n\n긍정적:\n\n- 이 모델의 학습 및 추론 소프트웨어는 오픈 소스입니다.\n- 학습된 모델은 무료로 사용 가능하므로 온프레미스에서 실행할 수 있습니다.\n\n부정적:\n\n- 학습 데이터는 무료로 제공되지 않으므로 bias를 확인 및 보정이 불가하며, 직접 최적화를 통해 더 좋은 성능을 이끌어내거나 CO2 배출량을 감소시키는 것이 불가합니다.\n\nNextcloud AI 윤리 등급에 대한 자세한 내용은 [블로그](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)에서 확인할 수 있습니다.\n\n설치 후 관리자 설정에서 태깅을 활성화할 수 있습니다.\n\n요구 사항:\n\n- php 7.4 이상\n- \"collaborative tags\" 앱이 활성화되어 있어야 합니다.\n- Native 성능 조건:\n- 프로세서: x86 64비트 (AVX 명령 지원)\n- glibc가 있는 시스템 (일반적으로 Linux에서 표준; 다음 시스템은 해당되지 않음: FreeBSD, Alpine Linux 및 공식 Nextcloud Docker 컨테이너 및 Nextcloud AIO)\n- Sub-Native 성능 조건 (WASM 모드 사용):\n- 프로세서: x86 64비트, arm64, armv7l (AVX가 필요하지 않음)\n- glibc 또는 musl이 있는 시스템 (Alpine Linux를 포함하여 공식 Nextcloud Docker 컨테이너 및 Nextcloud AIO가 해당됨)\n- 약 4GB의 무료 RAM (여유가 없다면 스왑이 가능한지 확인하세요)\n- 이 앱은 현재 *Suspicious Login* 앱과의 의존성 충돌로 인해 호환되지 않습니다 (즉, 두 개 중 하나만 설치할 수 있음).\n\n이 앱은 민감한 데이터를 클라우드 제공 업체나 유사한 서비스로 전송하지 않습니다. 모든 처리는 당신의 Nextcloud 기기에서 이뤄지며, Node.js에서 실행되는 Tensorflow.js를 사용합니다.",
    "Your server does not support AVX instructions" : "이 서버는 AVX 명령을 지원하지 않습니다",
    "Your server does not have an x86 64-bit CPU" : "이 서버에는 x86 64비트 CPU가 없습니다",
    "Your server uses musl libc" : "이 서버는 musl libc를 사용합니다",
    "Failed to load settings" : "설정을 불러오는 데 실패했습니다",
    "Failed to save settings" : "설정을 저장하는 데 실패했습니다",
    "never" : "하지 않음",
    "{time} ago" : "{time} 전",
    "Status" : "상태",
    "The machine learning models have been downloaded successfully." : "기계 학습 모델이 성공적으로 다운로드되었습니다.",
    "The machine learning models still need to be downloaded." : "아직 기계 학습 모델이 다운로드되지  않았습니다.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Node.js 바이너리를 실행할 수 없습니다. 작동 가능한 바이너리 경로를 수동으로 설정해야 할 수도 있습니다.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "백그라운드 작업이 cron을 통해 실행되고 있지 않습니다. Recognize를 사용하려면 백그라운드 작업이 cron을 통해 실행되어야 합니다",
    "The app is installed and will automatically classify files in background processes." : "앱이 설치되었으며 백그라운드 작업에서 파일을 자동으로 분류합니다.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "현재 선택된 태깅 옵션이 없습니다. 이 앱은 현재 아무 작업도 수행하지 않을 것입니다.",
    "Face recognition" : "얼굴 인식",
    "Face recognition is working. " : "얼굴 인식이 작동 중입니다.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "얼굴 인식 중 오류가 발생했습니다. Nextcloud 로그를 확인해 주세요.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "얼굴 인식에 대한 상태 보고를 기다리고 있습니다. 이 메시지가 15분 이상 지속되면 Nextcloud 로그를 확인해 주세요.",
    "Face recognition:" : "얼굴 인식:",
    "Queued files" : "개의 파일 대기 중",
    "Last classification: " : "최근 작업:",
    "Scheduled background jobs: " : "예약된 백그라운드 작업:",
    "Last background job execution: " : "마지막 백그라운드 작업 실행:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "얼굴 인식 대기열에 대기 중인 파일이 있지만, 이를 처리할 백그라운드 작업이 예약되어 있지 않습니다.",
    "Face clustering:" : "얼굴 클러스터링:",
    "faces left to cluster" : "개의 얼굴 남음",
    "Last clustering run: " : "최근 작업:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "클러스터링은 계정마다 최소 120개의 얼굴이 인식되었을 때부터 작동합니다",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "얼굴 인식 활성화 (사진에 나타나는 얼굴들로 사진을 그룹화합니다. 그룹화된 사진은 photos 앱에서 확인할 수 있습니다)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "작업당 처리할 파일 수 (5분마다 작업이 실행되기에 ~500개 또는 그 이상, WASM 모드에서는 ~50개를 권장합니다)",
    "Object detection & landmark recognition" : "객체 인식 & 랜드마크 인식",
    "Object recognition is working." : "객체 인식이 작동 중입니다.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "객체 인식 중 오류가 발생했습니다. Nextcloud 로그를 확인해 주세요.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "객체 인식에 대한 상태 보고를 기다리고 있습니다. 이 메시지가 15분 이상 지속되면 Nextcloud 로그를 확인해 주세요.",
    "Object recognition:" : "객체 인식:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "객체 인식 대기열에 대기 중인 파일이 있지만, 이를 처리할 백그라운드 작업이 예약되어 있지 않습니다.",
    "Landmark recognition is working." : "랜드마크 인식이 작동 중입니다.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "랜드마크 인식 중 오류가 발생했습니다. Nextcloud 로그를 확인해 주세요.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "랜드마크 인식에 대한 상태 보고를 기다리고 있습니다. 이 메시지가 15분 이상 지속되면 Nextcloud 로그를 확인해 주세요.",
    "Landmark recognition:" : "랜드마크 인식:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "랜드마크 인식 대기열에 대기 중인 파일이 있지만, 이를 처리할 백그라운드 작업이 예약되어 있지 않습니다.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "객체 인식 활성화 (예: 음식, 차량, 풍경)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "작업당 처리할 파일 수 (5분마다 작업이 실행되기에 ~100개 또는 그 이상, WASM 모드에서는 ~20개를 권장합니다)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "랜드마크 인식 활성화 (예: 에펠탑, 골든게이트 브리지)",
    "Audio tagging" : "오디오 태깅",
    "Audio recognition is working." : "오디오 인식이 작동 중입니다.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "오디오 인식 중 오류가 발생했습니다. Nextcloud 로그를 확인해 주세요.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "오디오 인식에 대한 상태 보고를 기다리고 있습니다. 이 메시지가 15분 이상 지속되면 Nextcloud 로그를 확인해 주세요.",
    "Music genre recognition:" : "음악 장르 인식:",
    "There are queued files but no background job is scheduled to process them." : "대기 중인 파일이 있지만, 이를 처리할 백그라운드 작업이 없습니다.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "음악 장르 인식 활성화 (예: 팝, 록, 포크, 메탈, 뉴에이지)",
    "Video tagging" : "비디오 태깅",
    "Video recognition is working." : "비디오 인식이 작동 중입니다.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "비디오 인식 중 오류가 발생했습니다. Nextcloud 로그를 확인해 주세요.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "비디오 인식에 대한 상태 보고를 기다리고 있습니다. 이 메시지가 15분 이상 지속되면 Nextcloud 로그를 확인해 주세요.",
    "Video recognition:" : "비디오 인식:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "사람의 행동 인식 활성화 (예: 팔씨름, 농구 드리블, 훌라후프)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "작업당 처리할 파일 수 (5분마다 작업이 실행되기에 ~20개 또는 그 이상, WASM 모드에서는 ~5개를 권장합니다)",
    "Reset" : "초기화",
    "Click the button below to remove all tags from all files that have been classified so far." : "지금까지 진행된 태깅 작업을 모두 초기화 하려면 아래 버튼을 누르세요.",
    "Reset tags for classified files" : "파일 태깅 작업 초기화",
    "Click the button below to remove all face detections from all files that have been classified so far." : "지금까지 진행된 얼굴 인식 작업을 모두 초기화 하려면 아래 버튼을 누르세요.",
    "Reset faces for classified files" : "얼굴 인식 작업 초기화",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "이 인스턴스의 모든 파일을 재탐색하고 분류 대기열에 추가하려면 아래 버튼을 누르세요.",
    "Rescan all files" : "파일 재탐색",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "분류 대기열과 모든 백그라운드 작업을 비우려면 아래 버튼을 누르세요. 이는 터미널 명령어로 초기 분류를 수행하고자 할 때 유용합니다. ",
    "Clear queues and background jobs" : "대기열과 백그라운드 작업 삭제",
    "Resource usage" : "리소스 사용량",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "기본적으로 모든 CPU 코어가 사용되기에, 시스템에 큰 부하를 줄 수 있습니다. 원한다면, 사용할 CPU 코어 수를 여기서 제한할 수 있습니다. (참고: 현재로서 WASM 모드에서는 단 1개의 코어만 사용됩니다.)",
    "Number of CPU Cores (0 for no limit)" : "사용할 CPU 코어 수 (0을 입력하면 무제한)",
    "By default, recognize will only ever run one classifier process at a time. If you have a lot of resources available and want to run as many processes in parallel as possible, you can turn on concurrency here." : "Recognize는 기본 설정으로 한 번에 하나의 분류 프로세스만 실행합니다. 만약 리소스가 충분하고 가능한 한 많은 프로세스를 병렬로 실행하고자 한다면, 여기서 동시성을 활성화할 수 있습니다.",
    "Enable unlimited concurrency of classifier processes" : "분류 프로세스의 무제한 동시성 활성화",
    "Tensorflow WASM mode" : "Tensorflow WASM 모드",
    "Checking CPU" : "CPU 확인중",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "Native TensorFlow 작동 지원 여부를 확인할 수 없습니다. GNU lib C가 설치된 OS를 사용하고, CPU가 AVX 명령을 지원하며, x86에서 실행 중인지 확인하세요. 이 중 하나라도 해당되지 않는 경우, WASM 모드에서 실행해야 합니다.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "이 시스템은 Native TensorFlow 작동을 지원하므로, WASM 모드가 필요하지 않습니다.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "시스템이 Native TensorFlow 작동을 지원하지 않기 때문에 WASM 모드가 자동으로 활성화되었습니다:",
    "Enable WASM mode" : "WASM 모드 활성화",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Recognize는 머신 러닝 모델을 실행하기 위해 TensorFlow를 사용합니다. 하지만 모든 시스템이 TensorFlow를 지원하는 것은 아닙니다. 그 이유는 CPU가 AVX 명령을 지원하지 않거나, 플랫폼이 x86이 아닌 시스템(예:ARM 시스템인 Raspberry Pi)일 수 있으며, 또는 Nextcloud가 실행되는 운영 체제(도커 사용 시 도커 이미지 내 OS)가 GNU lib C를 포함하지 않을 수도 있기 때문입니다(예: Nextcloud AIO에서 사용되는 Alpine Linux). 대부분의 경우, 시스템이 Native TensorFlow 작동을 지원하지 않더라도 Node.js에서 WebAssembly(WASM)를 사용해 TensorFlow를 실행할 수 있습니다. 이 방식은 다소 느리지만 정상적으로 작동합니다.",
    "Tensorflow GPU mode" : "Tensorflow GPU 모드",
    "Enable GPU mode" : "GPU 모드 활성화",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "다른 기계 학습 모델과 마찬가지로, Recognize는 GPU를 사용하면 더 빠르게 작동합니다. 세팅이 복잡할 수 있지만, 한번 제대로 설정되면 성능이 크게 향상됩니다.",
    "Learn how to setup GPU mode with Recognize" : "Recognize GPU 모드를 설정하는 방법 알아보기",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Node.js 확인 중",
    "Node.js {version} binary was installed successfully." : "Node.js {version} 바이너리가 성공적으로 설치되었습니다.",
    "Checking libtensorflow" : "libtensorflow 확인 중",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Node.js에 libtensorflow를 불러오지 못했습니다. 수동으로 libtensorflow를 설치하거나 WASM 모드에서 실행하세요.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Node.js에 libtensorflow는 성공적으로 불러왔지만, GPU를 불러오지 못했습니다. CUDA 툴킷과 cuDNN이 설치되어 있고 접근 가능한지 확인하세요. 또는 GPU 모드를 끄세요.",
    "Libtensorflow was loaded successfully into Node.js." : "Node.js에 libtensorflow를 성공적으로 불러왔습니다.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Node.js에 Tensorflow WASM을 불러오지 못했습니다. 설정에 문제가 있는 것 같습니다.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Node.js에 Tensorflow WASM을 성공적으로 불러왔습니다.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v20.9 and newer v20 releases." : "기본 제공되는 Node.js 바이너리가 시스템에서 작동하지 않을 경우, 사용자 지정 Node.js 바이너리 경로를 설정할 수 있습니다. 현재 지원되는 버전은 Node v20.9 및 그 이후의 v20 릴리스입니다.",
    "For Nextcloud Snap users, you need to adjust this path to point to the snap's \"current\" directory as the pre-configured path will change with each update. For example, set it to \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\" instead of \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\"" : "Nextcloud Snap 사용자라면, 업데이트를 진행할 때마다 기존 설정된 경로가 변경되므로 Snap의 \"current\" 디렉토리를 가리키도록 이 경로를 조정해야 합니다. 예를 들어, 이 경로 대신 \"/var/snap/nextcloud/9337974/nextcloud/extra-apps/recognize/bin/node\" 다음 경로로 설정하세요  \"/var/snap/nextcloud/current/nextcloud/extra-apps/recognize/bin/node\"",
    "Classifier process priority" : "분류 프로세스 우선순위",
    "Checking Nice binary" : "Nice 바이너리 확인 중",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "Nice 바이너리를 찾을 수 없습니다. 작동 가능한 바이너리의 경로를 수동으로 설정해야 할 수도 있습니다.",
    "Nice binary path" : "Nice 바이너리 경로",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Node.js 프로세스의 우선순위를 설정하기 위한 nice 값. Node.js 프로세스는 슈퍼유저 권한 없이 실행되므로 값은 0에서 19 사이여야 합니다. nice 값이 클수록 프로세스의 우선순위는 낮아집니다.",
    "Terminal commands" : "터미널 명령어",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "분류 작업을 실행하기 위해 모든 모델을 미리 다운로드 하려면,  서버 터미널에서 다음 명령어를 실행하세요.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "전체 분류 작업을 트리거하려면 서버 터미널에서 다음 명령을 실행하세요. (분류 작업은 여러 백그라운드 작업에서 실행되며, 병렬로 실행될 수 있습니다.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "터미널에서 전체 분류 작업을 실행하려면 다음을 실행하세요. (분류는 터미널 내에서 순차적으로 실행됩니다.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "터미널에서 전체 초기 분류 작업을 실행하기 전에, Recognize가 설치됐을 때 예약한 모든 백그라운드 작업을 중단해야 합니다. 이는 간섭을 피하기 위함입니다.",
    "To run a face clustering run on for each user in the terminal, run the following. Consider adding the parameter --batch-size 10000 for large libraries to avoid PHP memory exhaustion. (The clustering will run in sequence inside your terminal.)" : "터미널에서 각 사용자의 얼굴 클러스터링 작업을 실행하려면 다음을 실행하세요. 큰 라이브러리의 경우 PHP 메모리 고갈을 방지하기 위해 --batch-size 10000 매개변수를 추가하는 것이 좋습니다. (클러스터링은 터미널 내에서 순차적으로 실행됩니다.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "모든 얼굴 클러스터링 작업을 제거하나, 얼굴 인식 작업은 유지하려면 터미널에서 다음을 실행하세요:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "모든 얼굴 인식 작업과 얼굴 클러스터링 작업을 제거하려면 터미널에서 다음을 실행하세요:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Recognize가 이전에 분류한 모든 파일의 태그를 다음 명령어로 초기화할 수 있습니다:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "더 이상 연결된 파일이 없는 모든 태그를 삭제하려면 다음 명령어를 사용하세요:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "Recognize version 2에 의해 생성된 태그를 모든 파일에서 제거하려면 터미널에서 다음을 실행하세요:",
    "Cat" : "고양이",
    "Animal" : "동물",
    "Wildlife" : "야생동물",
    "Nature" : "자연",
    "Puma" : "퓨마",
    "Leopard" : "표범",
    "Lion" : "사자",
    "Wild cat" : "들고양이",
    "Cheetah" : "치타",
    "Seashore" : "바닷가",
    "Beach" : "해변",
    "Water" : "물",
    "Lakeside" : "호숫가",
    "Flower" : "꽃",
    "Plant" : "식물",
    "Window" : "창문",
    "Architecture" : "건축",
    "Stairs" : "계단",
    "Building" : "건물",
    "Field" : "들판",
    "Farm" : "농장",
    "Landscape" : "가로 방향",
    "Portrait" : "세로 방향",
    "People" : "사람",
    "Fashion" : "패션",
    "Ship" : "선박",
    "Vehicle" : "차량",
    "Grasshopper" : "메뚜기",
    "Insect" : "곤충",
    "Fish" : "물고기",
    "Shark" : "상어",
    "Chicken" : "닭",
    "Bird" : "새",
    "Ostrich" : "타조",
    "Owl" : "올빼미",
    "Salamander" : "도롱뇽",
    "Frog" : "개구리",
    "Turtle" : "거북이",
    "Reptile" : "파충류",
    "Lizard" : "도마뱀",
    "Chameleon" : "카멜레온",
    "Crocodile" : "악어",
    "Alligator" : "악어",
    "Scorpion" : "전갈",
    "Spider" : "거미",
    "Duck" : "오리",
    "Worm" : "지렁이",
    "Shell" : "조개",
    "Snail" : "달팽이",
    "Crab" : "게",
    "Lobster" : "바다 가재",
    "Cooking" : "요리",
    "Penguin" : "펭귄",
    "Whale" : "고래",
    "Dog" : "개",
    "Wolf" : "늑대",
    "Fox" : "여우",
    "Bear" : "곰",
    "Beetle" : "딱정벌레",
    "Butterfly" : "나비",
    "Rabbit" : "토끼",
    "Hippo" : "하마",
    "Cow" : "소",
    "Buffalo" : "물소",
    "Sheep" : "양",
    "Ape" : "유인원",
    "Monkey" : "원숭이",
    "Lemur" : "여우원숭이",
    "Elephant" : "코끼리",
    "Panda" : "판다",
    "Instrument" : "악기",
    "Music" : "음악",
    "Aircraft" : "항공기",
    "Airport" : "공항",
    "Tractor" : "트랙터",
    "Weapon" : "무기",
    "Backpack" : "배낭",
    "Shop" : "가게",
    "Office" : "사무실",
    "Outdoor" : "야외",
    "Living" : "생활",
    "Tower" : "타워",
    "Drinks" : "음료",
    "Beverage" : "음료",
    "Food" : "음식",
    "Shelter" : "주거",
    "Furniture" : "가구",
    "Book" : "책",
    "Train" : "기차",
    "Butcher" : "정육점",
    "Car" : "자동차",
    "Historic" : "역사적",
    "Boat" : "보트",
    "Electronics" : "전자 기기",
    "Indoor" : "실내",
    "Church" : "교회",
    "Shoe" : "신발",
    "Candle" : "양초",
    "Coffee" : "커피",
    "Keyboard" : "키보드",
    "Computer" : "컴퓨터",
    "Helmet" : "헬멧",
    "Wall" : "벽",
    "Clock" : "시계",
    "Dining" : "식사",
    "Kitchen" : "주방",
    "Snow" : "눈",
    "Dome" : "돔",
    "Screen" : "화면",
    "Flag" : "깃발",
    "Truck" : "트럭",
    "Store" : "가게",
    "Tool" : "도구",
    "Pumpkin" : "호박",
    "Vegetables" : "채소",
    "Photography" : "사진",
    "Library" : "도서관",
    "Display" : "표시",
    "Bag" : "가방",
    "Cup" : "컵",
    "Rocks" : "바위",
    "Bus" : "버스",
    "Bowl" : "그릇",
    "Monitor" : "모니터",
    "Bike" : "바이크",
    "Scooter" : "스쿠터",
    "Camping" : "캠핑",
    "Cart" : "카트",
    "Piggy bank" : "돼지저금통",
    "Bottle" : "병",
    "Plate" : "접시",
    "Camera" : "카메라",
    "Camper" : "캠퍼",
    "Barbecue" : "바베큐",
    "Basket" : "바구니",
    "Diving" : "다이빙",
    "Snowmobile" : "스노우모빌",
    "Bridge" : "교량",
    "Couch" : "소파",
    "Theater" : "극장",
    "Spoon" : "숟가락",
    "Comic" : "코믹",
    "Soup" : "스프",
    "Dessert" : "디저트",
    "Bakery" : "제빵소",
    "Fruit" : "과일",
    "Pasta" : "파스타",
    "Meat" : "고기",
    "Pizza" : "피자",
    "Wine" : "와인",
    "Alpine" : "높은 산",
    "Mountains" : "산",
    "Sand" : "모래",
    "Wool" : "양털",
    "Glass" : "유리",
    "Moment" : "순간",
    "Info" : "정보",
    "Document" : "문서",
    "Puzzle" : "퍼즐",
    "Heritage" : "유산",
    "Safe" : "금고",
    "Bucket" : "양동이",
    "Baby" : "아기",
    "Cradle" : "요람",
    "Patio" : "테라스",
    "Mountain" : "산",
    "Radio telescope" : "전파망원경",
    "Theme park" : "놀이공원",
    "Festival" : "축제",
    "Event" : "이벤트",
    "Monument" : "기념비",
    "Balloon" : "풍선",
    "Crib" : "아기 침대",
    "Fan" : "선풍기",
    "Gas station" : "주유소",
    "Wood" : "나무",
    "Bench" : "벤치",
    "Parking" : "주차",
    "Traffic" : "교통",
    "Public transport" : "대중교통",
    "Umbrella" : "우산",
    "Stage" : "무대",
    "Toy" : "장난감",
    "Vase" : "꽃병",
    "Mailbox" : "우편함",
    "Sign" : "표지",
    "Gallery" : "갤러리",
    "Park" : "공원"
},
"nplurals=1; plural=0;");
