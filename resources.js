window.phaseResources = {
  'phase-1': {
    books: [
      { title: '《C程序设计语言（第2版）》', author: 'Brian W. Kernighan / Dennis M. Ritchie', note: '用来建立准确、简洁的 C 语言基础；建议边读边敲例题。' },
      { title: '《C和指针》', author: 'Kenneth A. Reek', note: '重点补齐指针、数组、函数指针、结构体和内存理解。' },
      { title: '《深入理解计算机系统》', author: 'Randal E. Bryant / David R. O’Hallaron', note: '选读程序表示、链接、内存层次和异常控制流章节。' }
    ],
    videos: [
      { title: '程序设计入门——C语言', author: '浙江大学 · 翁恺', note: '适合零基础，先完成入门课程，再学习进阶课程。', url: 'https://www.icourse163.org/course/ZJU-199001' },
      { title: 'C语言程序设计进阶', author: '浙江大学 · 翁恺', note: '继续学习指针、链表、文件、多文件工程等内容。', url: 'https://www.icourse163.org/learn/ZJU-9001' },
      { title: '数据结构', author: '浙江大学', note: '在具备 C 基础后学习栈、队列、链表、树与图。', url: 'https://www.icourse163.org/learn/ZJU-93001' }
    ],
    creators: [
      { title: 'Embedded Artistry · Beginners', author: 'Phillip Johnston', note: '嵌入式入门、工程实践与推荐阅读集合。', url: 'https://embeddedartistry.com/beginners/' },
      { title: 'Interrupt by Memfault', author: 'Memfault 工程团队', note: '高质量固件、调试、可靠性和工程实践文章。', url: 'https://interrupt.memfault.com/' },
      { title: 'Hello 算法', author: '开源社区', note: '适合图形化补充数据结构与算法基础。', url: 'https://www.hello-algo.com/' }
    ]
  },
  'phase-2': {
    books: [
      { title: '《电子技术基础：模拟部分》', author: '康华光', note: '掌握二极管、三极管、运放和基础模拟电路。' },
      { title: '《电子技术基础：数字部分》', author: '康华光', note: '补齐组合逻辑、时序逻辑、触发器和数制基础。' },
      { title: 'Practical Electronics for Inventors', author: 'Paul Scherz / Simon Monk', note: '偏实践，适合查询元件、电源、接口和常见电路。' }
    ],
    videos: [
      { title: 'Electronics Video Lectures', author: 'All About Circuits', note: '从基础电学到半导体器件的免费课程。', url: 'https://www.allaboutcircuits.com/video-lectures/' },
      { title: 'EEVblog Tutorials', author: 'Dave Jones', note: '重点看万用表、示波器、焊接和电路调试相关内容。', url: 'https://www.eevblog.com/category/eevblog-official-releases/tutorials/' }
    ],
    creators: [
      { title: 'All About Circuits Textbook', author: 'All About Circuits', note: '免费的多卷电子电路教材，可按主题查询。', url: 'https://www.allaboutcircuits.com/textbook/' },
      { title: 'EEVblog', author: 'Dave Jones', note: '电子测量、拆解、仪器与工程经验分享。', url: 'https://www.eevblog.com/' },
      { title: '江协科技', author: '江协科技', note: '中文、循序渐进，适合单片机与基础电子实践。', url: 'https://jiangxiekeji.com/' }
    ]
  },
  'phase-3': {
    books: [
      { title: 'The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors', author: 'Joseph Yiu', note: '理解 Cortex-M 内核、异常、中断、启动和调试。' },
      { title: 'Mastering STM32（第2版）', author: 'Carmine Noviello', note: '从工具链、外设到 RTOS 的系统化 STM32 参考。', url: 'https://leanpub.com/mastering-stm32-2nd' },
      { title: '《STM32库开发实战指南》', author: '野火电子', note: '中文在线教材，适合跟开发板完成外设实验。', url: 'https://doc.embedfire.com/products/link/zh/latest/tutorial/ebf_stm32_stdlib_tutorial.html' }
    ],
    videos: [
      { title: 'STM32 MOOCs', author: 'STMicroelectronics', note: '官方免费课程，覆盖 STM32Cube、外设、低功耗和安全。', url: 'https://www.st.com/content/st_com/en/support/learning/stm32-moocs.html' },
      { title: 'STM32 入门教程', author: '江协科技', note: '中文完整系列，适合按 GPIO、定时器、串口等顺序实践。', url: 'https://jiangxiekeji.com/' },
      { title: 'STM32 HAL 库教程', author: '正点原子', note: '配套开发板资料丰富，适合补充 HAL 与工程实践。', url: 'https://www.openedv.com/docs/index.html' }
    ],
    creators: [
      { title: 'STM32 Developer Resources', author: 'STMicroelectronics', note: '官方文档、应用笔记、示例、工具与知识文章入口。', url: 'https://www.st.com/content/st_com/en/stm32-mcu-developer-zone/developer-resources.html' },
      { title: '野火电子文档中心', author: 'EmbedFire', note: '大量中文 STM32、Linux、RTOS 在线教材。', url: 'https://doc.embedfire.com/' },
      { title: '正点原子资料中心', author: 'ALIENTEK', note: '开发板手册、代码、视频和实验资料。', url: 'https://www.openedv.com/docs/index.html' }
    ]
  },
  'phase-4': {
    books: [
      { title: 'Making Embedded Systems（第2版）', author: 'Elecia White', note: '重点学习架构、状态机、并发、调试和产品化思维。', url: 'https://www.oreilly.com/library/view/making-embedded-systems/9781098151539/' },
      { title: 'Design Patterns for Embedded Systems in C', author: 'Bruce Powel Douglass', note: '学习状态机、硬件代理、并发与资源管理模式。' },
      { title: 'Patterns for Time-Triggered Embedded Systems', author: 'Michael J. Pont', note: '理解协作式调度、时间触发架构和可靠任务设计。' }
    ],
    videos: [
      { title: 'Modern Embedded Systems Programming', author: 'Quantum Leaps · Miro Samek', note: '状态机、事件驱动、面向对象 C 与嵌入式架构。', url: 'https://www.state-machine.com/video-course' },
      { title: 'Embedded Systems Architecture Resources', author: 'Embedded Artistry', note: '架构设计、分层、接口抽象与设计资料集合。', url: 'https://embeddedartistry.com/blog/2019/07/12/embedded-systems-architecture-resources/' }
    ],
    creators: [
      { title: 'Embedded Artistry', author: 'Phillip Johnston', note: '软件分层、硬件抽象、可移植性和工程流程。', url: 'https://embeddedartistry.com/' },
      { title: 'Interrupt · Building Better Firmware', author: 'Memfault', note: '断言、看门狗、单元测试、CI 与故障诊断。', url: 'https://interrupt.memfault.com/' },
      { title: 'Quantum Leaps', author: 'Miro Samek', note: '事件驱动架构、层次状态机与实时嵌入式设计。', url: 'https://www.state-machine.com/' }
    ]
  },
  'phase-5': {
    books: [
      { title: 'Mastering the FreeRTOS Real Time Kernel', author: 'Richard Barry / FreeRTOS', note: '官方免费教程，按任务、队列、同步和内存章节实践。', url: 'https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book' },
      { title: 'The FreeRTOS Reference Manual', author: 'FreeRTOS', note: '用于查询 API、配置选项和调用约束。', url: 'https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book' },
      { title: 'Real-Time Concepts for Embedded Systems', author: 'Qing Li / Caroline Yao', note: '理解调度、同步、优先级反转和实时系统基础。' }
    ],
    videos: [
      { title: 'FreeRTOS on STM32 MOOC', author: 'STMicroelectronics', note: '官方课程，结合 STM32 完成 FreeRTOS 应用。', url: 'https://www.st.com/content/st_com/en/support/learning/stm32-moocs/FreeRTOS_on_STM32_MOOC.html' },
      { title: 'FreeRTOS Kernel Documentation', author: 'FreeRTOS', note: '配合示例阅读任务、队列、信号量、通知和软件定时器。', url: 'https://www.freertos.org/Documentation/02-Kernel/01-About-the-FreeRTOS-kernel' }
    ],
    creators: [
      { title: 'FreeRTOS Community Forums', author: 'FreeRTOS 社区与维护者', note: '遇到调度、移植和 API 问题时优先检索。', url: 'https://forums.freertos.org/' },
      { title: 'Interrupt by Memfault', author: 'Memfault', note: 'RTOS 调试、栈、看门狗、HardFault 和设备可靠性。', url: 'https://interrupt.memfault.com/' },
      { title: 'Quantum Leaps', author: 'Miro Samek', note: '适合理解 RTOS 之外的事件驱动与状态机方案。', url: 'https://www.state-machine.com/' }
    ]
  },
  'phase-6': {
    books: [
      { title: 'TCP/IP Illustrated, Volume 1', author: 'Kevin R. Fall / W. Richard Stevens', note: '系统理解 TCP/IP、ARP、IP、TCP、UDP 和诊断工具。', url: 'https://www.oreilly.com/library/view/tcpip-illustrated-volume/9780132808200/' },
      { title: 'MQTT Essentials', author: 'HiveMQ', note: '免费系列教程，覆盖主题、QoS、会话、保留消息和遗嘱。', url: 'https://www.hivemq.com/mqtt-essentials/' },
      { title: 'Modbus Application Protocol Specification', author: 'Modbus Organization', note: '学习 Modbus 时应以官方规范作为最终依据。', url: 'https://www.modbus.org/specs.php' }
    ],
    videos: [
      { title: 'MQTT Essentials', author: 'HiveMQ', note: '从发布订阅模型到 MQTT 5 的结构化课程。', url: 'https://www.hivemq.com/mqtt-essentials/' },
      { title: 'CAN Protocol E-Learning', author: 'Vector Academy', note: '分单元学习 CAN 仲裁、帧、错误与物理层基础。', url: 'https://academy.vector.com/cn/en/courses/detail/3959/can-protocol-e-learning' },
      { title: 'ESP-IDF Get Started', author: 'Espressif', note: '使用官方框架完成 Wi-Fi、BLE、MQTT 与 OTA 实践。', url: 'https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html' }
    ],
    creators: [
      { title: 'ESP-IDF Programming Guide', author: 'Espressif', note: 'ESP32 官方开发文档和 API 入口，支持中文。', url: 'https://docs.espressif.com/projects/esp-idf/en/stable/esp32/index.html' },
      { title: 'EMQX 博客', author: 'EMQX', note: '中文 MQTT、物联网消息和协议实践文章。', url: 'https://www.emqx.com/zh/blog' },
      { title: 'MQTT.org', author: 'MQTT 社区', note: '协议介绍、软件生态与标准入口。', url: 'https://mqtt.org/' }
    ]
  },
  'phase-7': {
    books: [
      { title: 'Mastering STM32（Bootloader / Flash 章节）', author: 'Carmine Noviello', note: '结合链接脚本、向量表和 Flash 操作理解启动流程。', url: 'https://leanpub.com/mastering-stm32-2nd' },
      { title: 'The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors', author: 'Joseph Yiu', note: '重点看复位、异常、向量表、调试与内存映射。' },
      { title: 'OTA Update Checklist for Embedded Devices', author: 'Memfault', note: '以产品视角理解签名、回滚、断电、分批发布和监控。', url: 'https://memfault.com/blog/ota-update-checklist-for-embedded-devices/' }
    ],
    videos: [
      { title: 'STM32 Security Ecosystem MOOC', author: 'STMicroelectronics', note: '官方课程包含 Secure Boot 与 Secure Firmware Update。', url: 'https://www.st.com/content/st_com/en/support/learning/stm32-education/stm32-moocs/STM32_security_ecosystem.html' },
      { title: 'OTA Testing 101', author: 'Memfault', note: '学习如何测试弱网、低电量、重启和升级失败场景。', url: 'https://memfault.com/blog/ota-testing-101-the-ultimate-guide/' }
    ],
    creators: [
      { title: 'Interrupt · OTA / Boot / DFU', author: 'Memfault', note: 'Bootloader、固件升级、设备可靠性与现场诊断。', url: 'https://interrupt.memfault.com/' },
      { title: 'MCU on Eclipse', author: 'Erich Styger', note: '大量 Cortex-M、调试、启动、链接和 Bootloader 实践。', url: 'https://mcuoneclipse.com/' },
      { title: 'STM32 Wiki Training Zone', author: 'STMicroelectronics', note: '官方课程、知识文章与安全资料索引。', url: 'https://wiki.st.com/stm32mcu/wiki/Training_zone' }
    ]
  },
  'phase-8': {
    books: [
      { title: 'Test-Driven Development for Embedded C', author: 'James W. Grenning', note: '学习如何在主机端测试嵌入式 C、使用替身与持续重构。', url: 'https://pragprog.com/titles/jgade/test-driven-development-for-embedded-c/' },
      { title: 'Making Embedded Systems（第2版）', author: 'Elecia White', note: '回顾需求、架构、并发、调试和项目交付。', url: 'https://www.oreilly.com/library/view/making-embedded-systems/9781098151539/' },
      { title: 'Debugging Embedded and Real-Time Systems', author: 'Arnold S. Berger', note: '补充嵌入式调试方法、故障定位和实时系统问题。' }
    ],
    videos: [
      { title: 'Embedded C/C++ Unit Testing Basics', author: 'Memfault', note: '包含 mock、fake、stub 和 CppUTest 实例。', url: 'https://interrupt.memfault.com/blog/unit-testing-basics' },
      { title: 'Building Better Firmware with CI', author: 'Memfault', note: '将自动构建、检查和测试加入 GitHub 项目。', url: 'https://interrupt.memfault.com/blog/continuous-integration-for-firmware' },
      { title: 'Practical Architecture Series', author: 'Embedded Artistry', note: '项目重构、硬件抽象、接口和可移植性案例。', url: 'https://embeddedartistry.com/blog/category/practical-architecture/' }
    ],
    creators: [
      { title: 'Interrupt by Memfault', author: 'Memfault', note: '调试、测试、可靠性、OTA 和工程质量。', url: 'https://interrupt.memfault.com/' },
      { title: 'Embedded Artistry', author: 'Phillip Johnston', note: '产品级嵌入式架构、流程和代码设计。', url: 'https://embeddedartistry.com/' },
      { title: 'Golioth Blog', author: 'Golioth', note: '联网设备、Zephyr、日志、设备管理和云端实践。', url: 'https://blog.golioth.io/' }
    ]
  },
  'phase-9': {
    books: [
      { title: 'The Linux Programming Interface', author: 'Michael Kerrisk', note: 'Linux 应用、进程、线程、文件、信号与 IPC 的权威参考。' },
      { title: 'Linux Device Drivers, 3rd Edition', author: 'Jonathan Corbet / Alessandro Rubini / Greg Kroah-Hartman', note: '内容较旧，但驱动模型和核心思想仍适合入门，免费在线阅读。', url: 'https://lwn.net/Kernel/LDD3/' },
      { title: 'Feedback Systems', author: 'Karl J. Åström / Richard M. Murray', note: '机器人与控制方向的免费控制理论教材。', url: 'https://fbsbook.org/' }
    ],
    videos: [
      { title: 'Embedded Linux Training Materials', author: 'Bootlin', note: 'Linux 系统构建、内核、驱动、Buildroot 与 Yocto 免费材料。', url: 'https://bootlin.com/docs/' },
      { title: 'ROS 2 Tutorials', author: 'Open Robotics', note: '机器人方向从节点、话题、服务、动作和包开始。', url: 'https://docs.ros.org/en/humble/Tutorials.html' },
      { title: 'CAN Protocol E-Learning', author: 'Vector Academy', note: '汽车电子方向的 CAN 入门课程。', url: 'https://academy.vector.com/cn/en/courses/detail/3959/can-protocol-e-learning' },
      { title: 'Zephyr Getting Started', author: 'Zephyr Project', note: '物联网和低功耗方向可进一步学习现代开源 RTOS。', url: 'https://docs.zephyrproject.org/latest/develop/getting_started/index.html' }
    ],
    creators: [
      { title: 'Bootlin', author: '嵌入式 Linux 与内核工程团队', note: 'Linux、驱动、Buildroot、Yocto 和实时 Linux。', url: 'https://bootlin.com/' },
      { title: 'Vector Know-how', author: 'Vector', note: 'CAN、UDS、AUTOSAR 与车载网络知识。', url: 'https://www.vector.com/int/en/know-how/' },
      { title: 'ROS 2 Documentation', author: 'Open Robotics', note: 'ROS 2 官方文档、教程与概念参考。', url: 'https://docs.ros.org/' },
      { title: 'Zephyr Project', author: 'Linux Foundation', note: '物联网、连接协议、设备树和低功耗 RTOS 生态。', url: 'https://www.zephyrproject.org/' }
    ]
  }
};

window.directionResources = {
  '嵌入式 Linux': [
    { title: 'Bootlin 免费培训材料', url: 'https://bootlin.com/docs/' },
    { title: 'Linux Device Drivers 3', url: 'https://lwn.net/Kernel/LDD3/' },
    { title: 'The Linux Programming Interface', url: 'https://man7.org/tlpi/' }
  ],
  '物联网': [
    { title: 'ESP-IDF 官方文档', url: 'https://docs.espressif.com/projects/esp-idf/en/stable/esp32/index.html' },
    { title: 'MQTT Essentials', url: 'https://www.hivemq.com/mqtt-essentials/' },
    { title: 'Zephyr Project', url: 'https://www.zephyrproject.org/' }
  ],
  '汽车电子': [
    { title: 'Vector CAN E-Learning', url: 'https://academy.vector.com/cn/en/courses/detail/3959/can-protocol-e-learning' },
    { title: 'Vector UDS 基础', url: 'https://www.vector.com/int/en/events/global-de-en/webinar-recordings/2021/a-brief-introduction-to-the-diagnostic-protocol-uds-iso-14229/' },
    { title: 'AUTOSAR 官方站点', url: 'https://www.autosar.org/' }
  ],
  '机器人与控制': [
    { title: 'ROS 2 官方教程', url: 'https://docs.ros.org/en/humble/Tutorials.html' },
    { title: 'Feedback Systems 免费教材', url: 'https://fbsbook.org/' },
    { title: '江协科技 PID 教程', url: 'https://jiangxiekeji.com/' }
  ],
  '低功耗设备': [
    { title: 'STM32 超低功耗课程', url: 'https://www.st.com/content/st_com/en/support/learning/stm32-moocs.html' },
    { title: 'Zephyr Power Management', url: 'https://docs.zephyrproject.org/latest/services/pm/index.html' },
    { title: 'Memfault 设备可靠性文章', url: 'https://interrupt.memfault.com/' }
  ]
};
