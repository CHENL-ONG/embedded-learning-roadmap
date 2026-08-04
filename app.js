const phases = [
  {
    id: 'phase-1', category: 'foundation', icon: '⌁', title: 'C 语言与计算机基础', duration: '4–6 周',
    summary: '建立嵌入式开发最重要的语言、内存和工程基础。',
    topics: ['指针', '位运算', '内存模型', '多文件工程', 'Git', '状态机'],
    project: '命令行工具 + 环形缓冲区 + 软件定时器',
    tasks: ['掌握指针与数组的区别', '能解释 static、const、volatile', '实现环形缓冲区', '使用 Git 管理一个 C 项目']
  },
  {
    id: 'phase-2', category: 'foundation', icon: '⌁', title: '电路与数字基础', duration: '2–3 周',
    summary: '看懂基础原理图，理解 MCU 引脚与真实电路之间的关系。',
    topics: ['欧姆定律', '上拉下拉', 'MOS 管', '数字逻辑', 'ADC', 'PWM'],
    project: '按键、蜂鸣器、ADC 与 PWM 小实验',
    tasks: ['会使用万用表测量电压与通断', '理解推挽与开漏输出', '完成按键消抖', '用 PWM 控制 LED 亮度']
  },
  {
    id: 'phase-3', category: 'mcu', icon: '▦', title: 'STM32 裸机开发', duration: '8–10 周',
    summary: '从 GPIO 到 DMA，系统掌握 MCU 外设和调试方法。',
    topics: ['GPIO', 'UART', '定时器', 'ADC', 'DMA', 'I²C', 'SPI', 'CAN'],
    project: '多传感器数据采集终端',
    tasks: ['完成 UART 中断与环形缓冲区', '使用 I²C 驱动一个传感器', '使用 DMA 完成 ADC 采样', '用逻辑分析仪定位一次通信问题']
  },
  {
    id: 'phase-4', category: 'mcu', icon: '⌘', title: '代码架构与驱动设计', duration: '3–4 周',
    summary: '把“能运行”的代码升级为可维护、可移植的工程。',
    topics: ['分层设计', 'BSP', '驱动接口', '错误码', '超时', '状态机'],
    project: '重构数据采集终端',
    tasks: ['完成应用层与驱动层分离', '建立统一错误码', '为通信加入超时与重试', '为项目补充 README 与架构图']
  },
  {
    id: 'phase-5', category: 'system', icon: '⎇', title: 'FreeRTOS 实时系统', duration: '5–7 周',
    summary: '学习任务调度、通信、同步以及实时系统稳定性设计。',
    topics: ['任务', '队列', '信号量', '互斥量', '事件组', '任务通知'],
    project: 'FreeRTOS 多任务采集终端',
    tasks: ['用队列传递传感器数据', '用互斥量保护共享总线', '监测任务栈剩余空间', '设计看门狗监控机制']
  },
  {
    id: 'phase-6', category: 'system', icon: '⌁', title: '通信协议与物联网', duration: '4–6 周',
    summary: '让设备可靠地连接其他设备、上位机与云端。',
    topics: ['RS-485', 'Modbus', 'CAN', 'TCP/IP', 'MQTT', 'BLE'],
    project: '远程环境监测设备',
    tasks: ['设计带校验的串口协议', '实现 Modbus RTU 通信', '完成 MQTT 数据上报', '处理断线重连与异常恢复']
  },
  {
    id: 'phase-7', category: 'advanced', icon: '⇧', title: 'Bootloader 与系统升级', duration: '3–4 周',
    summary: '理解 Flash 分区、固件校验和可靠升级机制。',
    topics: ['Flash 分区', 'IAP', 'OTA', 'CRC', '版本管理', '回滚'],
    project: '串口 Bootloader',
    tasks: ['完成 Bootloader 到应用跳转', '实现固件 CRC 校验', '处理升级中断电场景', '设计版本与回滚策略']
  },
  {
    id: 'phase-8', category: 'advanced', icon: '◆', title: '综合毕业项目', duration: '4–8 周',
    summary: '把硬件、驱动、RTOS、通信、异常与文档整合为作品集。',
    topics: ['需求分析', '架构设计', '联调', '测试', '文档', '演示'],
    project: '环境终端 / 电机控制 / 工业采集器',
    tasks: ['编写完整需求与架构说明', '完成异常注入测试', '录制项目演示视频', '整理可公开的 GitHub 仓库']
  },
  {
    id: 'phase-9', category: 'advanced', icon: '↗', title: '方向选择与深入', duration: '持续进阶',
    summary: '根据岗位目标，进入 Linux、物联网、汽车、机器人或低功耗方向。',
    topics: ['Linux', 'IoT', '汽车电子', '机器人', '低功耗'],
    project: '面向目标岗位的专项作品',
    tasks: ['确定目标岗位与技能差距', '选择一条主攻方向', '完成一个专项项目', '围绕岗位准备简历与面试']
  }
];

const projects = [
  { symbol: '◉', title: '多传感器数据采集终端', description: '路线中的第一个完整 MCU 项目：传感器采集、OLED 显示、串口命令、参数保存与异常日志。', tech: ['STM32', 'I²C', 'ADC', 'DMA', 'OLED'], outcome: '目标：证明你能独立完成裸机项目' },
  { symbol: '≋', title: 'FreeRTOS 多任务终端', description: '把裸机程序升级为多任务系统，处理任务通信、资源竞争、监控与故障恢复。', tech: ['FreeRTOS', 'Queue', 'Mutex'], outcome: '目标：建立实时系统思维' },
  { symbol: '⌁', title: '远程环境监测设备', description: '加入网络与协议层，让设备稳定上传数据并支持远程配置。', tech: ['MQTT', 'RS-485', 'Modbus'], outcome: '目标：具备联网设备开发能力' },
  { symbol: '⇧', title: '可靠升级系统', description: '实现 Bootloader、固件校验、升级状态保存与失败恢复。', tech: ['Bootloader', 'CRC', 'Flash'], outcome: '目标：从 Demo 走向产品级设计' },
  { symbol: '◆', title: '毕业作品集项目', description: '选择工业采集、电机控制或环境监测方向，交付代码、文档、测试与演示。', tech: ['Architecture', 'Testing', 'Docs'], outcome: '目标：形成求职作品' }
];

const directions = [
  { icon: '⌨', title: '嵌入式 Linux', desc: '适合智能设备、BSP、驱动与网络应用。', items: ['Linux C', '设备树', '驱动', 'Buildroot / Yocto'] },
  { icon: '⌁', title: '物联网', desc: '适合联网终端、智能硬件与云边协同。', items: ['ESP32', 'MQTT', 'BLE', 'OTA 与安全'] },
  { icon: '◫', title: '汽车电子', desc: '适合车载网络、诊断、控制器与功能安全。', items: ['CAN FD', 'UDS', 'AUTOSAR', 'MISRA C'] },
  { icon: '⌖', title: '机器人与控制', desc: '适合运动控制、传感器融合与实时系统。', items: ['电机控制', 'PID', 'IMU', 'ROS 2'] },
  { icon: '◐', title: '低功耗设备', desc: '适合穿戴、无线传感器与电池供电产品。', items: ['睡眠模式', 'BLE', '功耗测量', '能耗预算'] }
];

const checklist = [
  '熟练使用 C 语言、指针和位运算',
  '能够阅读基础原理图和芯片数据手册',
  '独立使用 GPIO、UART、I²C、SPI、ADC、DMA 与定时器',
  '能够编写并移植传感器驱动',
  '能够用串口、GDB 与逻辑分析仪定位问题',
  '能够使用 FreeRTOS 设计多任务系统',
  '理解竞态、死锁、优先级反转与临界区',
  '能够设计简单、可靠、可升级的通信协议',
  '实现参数存储、看门狗与 Bootloader',
  '使用 Git 管理代码并编写清晰文档',
  '独立完成并讲解一个综合项目'
];

const state = {
  tasks: JSON.parse(localStorage.getItem('embedded-roadmap-tasks') || '{}'),
  checks: JSON.parse(localStorage.getItem('embedded-roadmap-checks') || '{}')
};

function renderPhases() {
  const grid = document.querySelector('#roadmapGrid');
  const template = document.querySelector('#phaseTemplate');

  phases.forEach((phase, phaseIndex) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.phase-card');
    card.dataset.category = phase.category;
    node.querySelector('.phase-number').textContent = `PHASE ${String(phaseIndex + 1).padStart(2, '0')}`;
    node.querySelector('.phase-duration').textContent = phase.duration;
    node.querySelector('.phase-icon').textContent = phase.icon;
    node.querySelector('h3').textContent = phase.title;
    node.querySelector('.phase-summary').textContent = phase.summary;

    const topics = node.querySelector('.topic-list');
    phase.topics.forEach(topic => {
      const li = document.createElement('li');
      li.textContent = topic;
      topics.appendChild(li);
    });

    node.querySelector('.phase-project').innerHTML = `<strong>阶段项目</strong><br>${phase.project}`;
    const taskList = node.querySelector('.task-list');
    phase.tasks.forEach((task, taskIndex) => {
      const key = `${phase.id}-task-${taskIndex}`;
      const label = document.createElement('label');
      label.className = `task-item ${state.tasks[key] ? 'done' : ''}`;
      label.innerHTML = `<input type="checkbox" ${state.tasks[key] ? 'checked' : ''}><span>${task}</span>`;
      label.querySelector('input').addEventListener('change', event => {
        state.tasks[key] = event.target.checked;
        label.classList.toggle('done', event.target.checked);
        saveState();
        updateProgress();
      });
      taskList.appendChild(label);
    });
    grid.appendChild(node);
  });
}

function renderProjects() {
  const grid = document.querySelector('#projectGrid');
  projects.forEach((project, index) => {
    const article = document.createElement('article');
    article.className = 'project-card';
    article.dataset.index = String(index + 1).padStart(2, '0');
    article.innerHTML = `
      <div>
        <div class="project-symbol">${project.symbol}</div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">${project.tech.map(item => `<span>${item}</span>`).join('')}</div>
      </div>
      <div class="project-outcome">${project.outcome}</div>
    `;
    grid.appendChild(article);
  });
}

function renderDirections() {
  const grid = document.querySelector('#directionGrid');
  directions.forEach(direction => {
    const article = document.createElement('article');
    article.className = 'direction-card';
    article.innerHTML = `
      <div class="direction-icon">${direction.icon}</div>
      <h3>${direction.title}</h3>
      <p>${direction.desc}</p>
      <ul>${direction.items.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
    grid.appendChild(article);
  });
}

function renderChecklist() {
  const grid = document.querySelector('#checklistGrid');
  checklist.forEach((item, index) => {
    const key = `check-${index}`;
    const label = document.createElement('label');
    label.className = `check-item ${state.checks[key] ? 'done' : ''}`;
    label.innerHTML = `<input type="checkbox" ${state.checks[key] ? 'checked' : ''}><span>${item}</span>`;
    label.querySelector('input').addEventListener('change', event => {
      state.checks[key] = event.target.checked;
      label.classList.toggle('done', event.target.checked);
      saveState();
      updateChecklist();
    });
    grid.appendChild(label);
  });
}

function saveState() {
  localStorage.setItem('embedded-roadmap-tasks', JSON.stringify(state.tasks));
  localStorage.setItem('embedded-roadmap-checks', JSON.stringify(state.checks));
}

function updateProgress() {
  const total = phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
  const complete = Object.values(state.tasks).filter(Boolean).length;
  const percent = total ? Math.round((complete / total) * 100) : 0;
  document.querySelector('#progressValue').textContent = `${percent}%`;
  document.querySelector('#completedCount').textContent = complete;
  document.querySelector('#totalCount').textContent = total;
  document.querySelector('#progressRing').style.setProperty('--progress', `${percent * 3.6}deg`);

  let active = 1;
  let accumulated = 0;
  for (let i = 0; i < phases.length; i += 1) {
    accumulated += phases[i].tasks.length;
    if (complete < accumulated) { active = i + 1; break; }
    active = Math.min(i + 2, phases.length);
  }
  document.querySelector('#activePhase').textContent = `阶段 ${active}`;
}

function updateChecklist() {
  const complete = Object.values(state.checks).filter(Boolean).length;
  const total = checklist.length;
  const percent = total ? (complete / total) * 100 : 0;
  document.querySelector('#checklistText').textContent = `${complete} / ${total} 已完成`;
  document.querySelector('#checklistBar').style.width = `${percent}%`;
}

function setupFilters() {
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.phase-card').forEach(card => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
      });
    });
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem('embedded-roadmap-theme');
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  const button = document.querySelector('#themeToggle');
  const icon = button.querySelector('.theme-icon');
  const sync = () => { icon.textContent = document.documentElement.dataset.theme === 'light' ? '☀' : '☾'; };
  sync();
  button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('embedded-roadmap-theme', next);
    sync();
  });
}

function setupReset() {
  document.querySelector('#resetProgress').addEventListener('click', () => {
    if (!window.confirm('确定要清空所有学习进度吗？')) return;
    localStorage.removeItem('embedded-roadmap-tasks');
    localStorage.removeItem('embedded-roadmap-checks');
    window.location.reload();
  });
}

renderPhases();
renderProjects();
renderDirections();
renderChecklist();
setupFilters();
setupTheme();
setupReset();
updateProgress();
updateChecklist();
