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

phases.forEach(phase => {
  phase.resources = window.phaseResources?.[phase.id] || { books: [], videos: [], creators: [] };
});

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

const STORAGE_KEYS = {
  tasks: 'embedded-roadmap-tasks',
  checks: 'embedded-roadmap-checks',
  personal: 'embedded-roadmap-personal-v1'
};

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value ?? fallback;
  } catch (error) {
    console.warn(`无法读取本地数据：${key}`, error);
    return fallback;
  }
}

const state = {
  tasks: loadJson(STORAGE_KEYS.tasks, {}),
  checks: loadJson(STORAGE_KEYS.checks, {}),
  personal: loadJson(STORAGE_KEYS.personal, { phases: {} })
};

let activePhaseId = null;
let activeResourceId = null;
let activeTaskId = null;

function createId(prefix = 'item') {
  if (window.crypto?.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getPhasePersonal(phaseId) {
  state.personal.phases ||= {};
  state.personal.phases[phaseId] ||= {
    plan: {},
    customTasks: [],
    customResources: []
  };
  const data = state.personal.phases[phaseId];
  data.plan ||= {};
  data.customTasks ||= [];
  data.customResources ||= [];
  return data;
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(state.tasks));
  localStorage.setItem(STORAGE_KEYS.checks, JSON.stringify(state.checks));
  localStorage.setItem(STORAGE_KEYS.personal, JSON.stringify(state.personal));
}

function safeUrl(rawUrl) {
  const value = String(rawUrl || '').trim();
  if (!value) return '';
  try {
    const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    const parsed = new URL(candidate);
    return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : '';
  } catch {
    return '';
  }
}

function formatDate(dateText) {
  if (!dateText) return '';
  const date = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateText;
  return new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

function createActionButton(label, className, handler, ariaLabel = label) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = className;
  button.textContent = label;
  button.setAttribute('aria-label', ariaLabel);
  button.addEventListener('click', handler);
  return button;
}

function renderPhases() {
  const grid = document.querySelector('#roadmapGrid');
  const template = document.querySelector('#phaseTemplate');
  grid.replaceChildren();

  phases.forEach((phase, phaseIndex) => {
    const personal = getPhasePersonal(phase.id);
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.phase-card');
    card.dataset.category = phase.category;
    card.dataset.phaseId = phase.id;

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

    const project = node.querySelector('.phase-project');
    const projectTitle = document.createElement('strong');
    projectTitle.textContent = '阶段项目';
    project.append(projectTitle, document.createElement('br'), document.createTextNode(phase.project));

    renderPlanPanel(node.querySelector('.personal-plan'), phase, personal.plan);
    renderPhaseResources(node.querySelector('.resource-groups'), phase, personal.customResources);

    node.querySelector('.add-resource-button').addEventListener('click', () => openResourceDialog(phase.id));
    node.querySelector('.add-task-button').addEventListener('click', () => openTaskDialog(phase.id));

    const taskList = node.querySelector('.task-list');
    phase.tasks.forEach((task, taskIndex) => {
      const key = `${phase.id}-task-${taskIndex}`;
      taskList.appendChild(createTaskRow({
        text: task,
        done: Boolean(state.tasks[key]),
        onToggle: checked => {
          state.tasks[key] = checked;
          saveState();
          updateProgress();
        }
      }));
    });

    personal.customTasks.forEach(task => {
      taskList.appendChild(createTaskRow({
        text: task.text,
        done: Boolean(task.done),
        custom: true,
        onToggle: checked => {
          task.done = checked;
          saveState();
          updateProgress();
        },
        onEdit: () => openTaskDialog(phase.id, task.id),
        onDelete: () => deleteCustomTask(phase.id, task.id)
      }));
    });

    if (!phase.tasks.length && !personal.customTasks.length) {
      const empty = document.createElement('p');
      empty.className = 'empty-state';
      empty.textContent = '暂时没有任务，可以添加自己的学习任务。';
      taskList.appendChild(empty);
    }

    grid.appendChild(node);
  });

  applyActiveFilter();
}

function renderPlanPanel(container, phase, plan) {
  const heading = document.createElement('div');
  heading.className = 'personal-plan-heading';
  const titleWrap = document.createElement('div');
  const eyebrow = document.createElement('span');
  eyebrow.textContent = '我的学习计划';
  const title = document.createElement('strong');
  title.textContent = plan.goal ? plan.goal : '还没有制定计划';
  titleWrap.append(eyebrow, title);
  const edit = createActionButton(plan.goal || plan.startDate || plan.weeklyPlan ? '编辑' : '制定计划', 'mini-button', () => openPlanDialog(phase.id));
  heading.append(titleWrap, edit);
  container.appendChild(heading);

  const hasPlan = Object.values(plan || {}).some(value => String(value || '').trim());
  if (!hasPlan) {
    const empty = document.createElement('p');
    empty.className = 'plan-empty';
    empty.textContent = '设置起止日期、每周投入、阶段目标和周计划。数据只保存在你的浏览器中。';
    container.appendChild(empty);
    return;
  }

  const meta = document.createElement('div');
  meta.className = 'plan-meta';
  if (plan.startDate || plan.endDate) {
    const date = document.createElement('span');
    const range = [formatDate(plan.startDate), formatDate(plan.endDate)].filter(Boolean).join(' → ');
    date.textContent = `日期：${range}`;
    meta.appendChild(date);
  }
  if (plan.weeklyHours) {
    const hours = document.createElement('span');
    hours.textContent = `每周：${plan.weeklyHours} 小时`;
    meta.appendChild(hours);
  }
  container.appendChild(meta);

  if (plan.weeklyPlan) {
    const block = document.createElement('div');
    block.className = 'plan-block';
    const label = document.createElement('b');
    label.textContent = '执行计划';
    const text = document.createElement('p');
    text.textContent = plan.weeklyPlan;
    block.append(label, text);
    container.appendChild(block);
  }
  if (plan.notes) {
    const block = document.createElement('div');
    block.className = 'plan-block';
    const label = document.createElement('b');
    label.textContent = '学习笔记';
    const text = document.createElement('p');
    text.textContent = plan.notes;
    block.append(label, text);
    container.appendChild(block);
  }
}

function createTaskRow({ text, done, custom = false, onToggle, onEdit, onDelete }) {
  const row = document.createElement('div');
  row.className = `task-row ${done ? 'done' : ''} ${custom ? 'custom-task' : ''}`;

  const label = document.createElement('label');
  label.className = 'task-item';
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = done;
  const span = document.createElement('span');
  span.textContent = text;
  label.append(input, span);
  input.addEventListener('change', event => {
    row.classList.toggle('done', event.target.checked);
    onToggle(event.target.checked);
  });
  row.appendChild(label);

  if (custom) {
    const actions = document.createElement('div');
    actions.className = 'inline-actions';
    actions.append(
      createActionButton('✎', 'icon-text-button', onEdit, `编辑任务：${text}`),
      createActionButton('×', 'icon-text-button danger', onDelete, `删除任务：${text}`)
    );
    row.appendChild(actions);
  }
  return row;
}

function renderPhaseResources(container, phase, customResources) {
  const defaults = phase.resources || { books: [], videos: [], creators: [] };
  const sections = [
    ['content', '我的学习内容', '✦'],
    ['books', '推荐书目', '▤'],
    ['videos', '视频 / 课程', '▶'],
    ['creators', '博主 / 社区', '◎']
  ];

  sections.forEach(([key, label, icon]) => {
    const defaultItems = key === 'content' ? [] : (defaults[key] || []).map(item => ({ ...item, custom: false }));
    const personalItems = customResources
      .filter(item => item.type === key)
      .map(item => ({ ...item, custom: true }));
    const items = [...defaultItems, ...personalItems];
    if (!items.length && key !== 'content') return;

    const group = document.createElement('section');
    group.className = 'resource-group';
    const heading = document.createElement('h4');
    const iconSpan = document.createElement('span');
    iconSpan.textContent = icon;
    heading.append(iconSpan, document.createTextNode(label));
    if (personalItems.length) {
      const count = document.createElement('small');
      count.textContent = `自定义 ${personalItems.length}`;
      heading.appendChild(count);
    }
    group.appendChild(heading);

    const list = document.createElement('div');
    list.className = 'resource-list';
    if (!items.length) {
      const empty = document.createElement('p');
      empty.className = 'empty-state compact';
      empty.textContent = '可以添加自己的文章、章节、练习或知识点。';
      list.appendChild(empty);
    }
    items.forEach(item => list.appendChild(createResourceItem(phase.id, item)));
    group.appendChild(list);
    container.appendChild(group);
  });
}

function createResourceItem(phaseId, item) {
  const wrapper = document.createElement('div');
  wrapper.className = `resource-item ${item.custom ? 'custom-resource' : ''}`;
  const url = safeUrl(item.url);
  const content = url ? document.createElement('a') : document.createElement('div');
  content.className = 'resource-content';
  if (url) {
    content.href = url;
    content.target = '_blank';
    content.rel = 'noreferrer';
  }

  const title = document.createElement('strong');
  title.textContent = item.title || '未命名资源';
  content.appendChild(title);
  if (item.author) {
    const author = document.createElement('span');
    author.textContent = item.author;
    content.appendChild(author);
  }
  if (item.note) {
    const note = document.createElement('p');
    note.textContent = item.note;
    content.appendChild(note);
  }
  if (url) {
    const arrow = document.createElement('i');
    arrow.textContent = '↗';
    arrow.setAttribute('aria-hidden', 'true');
    content.appendChild(arrow);
  }
  wrapper.appendChild(content);

  if (item.custom) {
    const actions = document.createElement('div');
    actions.className = 'resource-actions';
    actions.append(
      createActionButton('编辑', 'text-action', () => openResourceDialog(phaseId, item.id)),
      createActionButton('删除', 'text-action danger', () => deleteCustomResource(phaseId, item.id))
    );
    wrapper.appendChild(actions);
  }
  return wrapper;
}

function renderProjects() {
  const grid = document.querySelector('#projectGrid');
  grid.replaceChildren();
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
  grid.replaceChildren();
  directions.forEach(direction => {
    const article = document.createElement('article');
    article.className = 'direction-card';
    const resources = window.directionResources?.[direction.title] || [];
    article.innerHTML = `
      <div class="direction-icon">${direction.icon}</div>
      <h3>${direction.title}</h3>
      <p>${direction.desc}</p>
      <ul>${direction.items.map(item => `<li>${item}</li>`).join('')}</ul>
      ${resources.length ? `
        <details class="direction-resource-panel">
          <summary>方向资源 <span>↗</span></summary>
          <div>${resources.map(item => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a>`).join('')}</div>
        </details>` : ''}
    `;
    grid.appendChild(article);
  });
}

function renderChecklist() {
  const grid = document.querySelector('#checklistGrid');
  grid.replaceChildren();
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

function openPlanDialog(phaseId) {
  activePhaseId = phaseId;
  const phase = phases.find(item => item.id === phaseId);
  const plan = getPhasePersonal(phaseId).plan;
  document.querySelector('#planDialogTitle').textContent = `${phase.title} · 我的计划`;
  document.querySelector('#planGoal').value = plan.goal || '';
  document.querySelector('#planStartDate').value = plan.startDate || '';
  document.querySelector('#planEndDate').value = plan.endDate || '';
  document.querySelector('#planWeeklyHours').value = plan.weeklyHours || '';
  document.querySelector('#planWeeklyPlan').value = plan.weeklyPlan || '';
  document.querySelector('#planNotes').value = plan.notes || '';
  document.querySelector('#clearPlanButton').hidden = !Object.values(plan).some(Boolean);
  document.querySelector('#planDialog').showModal();
}

function openResourceDialog(phaseId, resourceId = null) {
  activePhaseId = phaseId;
  activeResourceId = resourceId;
  const phase = phases.find(item => item.id === phaseId);
  const resource = resourceId
    ? getPhasePersonal(phaseId).customResources.find(item => item.id === resourceId)
    : null;
  document.querySelector('#resourceDialogTitle').textContent = `${resource ? '编辑' : '添加'}资源 · ${phase.title}`;
  document.querySelector('#resourceType').value = resource?.type || 'content';
  document.querySelector('#resourceTitle').value = resource?.title || '';
  document.querySelector('#resourceAuthor').value = resource?.author || '';
  document.querySelector('#resourceUrl').value = resource?.url || '';
  document.querySelector('#resourceNote').value = resource?.note || '';
  document.querySelector('#resourceDialog').showModal();
}

function openTaskDialog(phaseId, taskId = null) {
  activePhaseId = phaseId;
  activeTaskId = taskId;
  const phase = phases.find(item => item.id === phaseId);
  const task = taskId ? getPhasePersonal(phaseId).customTasks.find(item => item.id === taskId) : null;
  document.querySelector('#taskDialogTitle').textContent = `${task ? '编辑' : '添加'}任务 · ${phase.title}`;
  document.querySelector('#taskText').value = task?.text || '';
  document.querySelector('#taskDialog').showModal();
  setTimeout(() => document.querySelector('#taskText').focus(), 0);
}

function deleteCustomTask(phaseId, taskId) {
  const personal = getPhasePersonal(phaseId);
  const task = personal.customTasks.find(item => item.id === taskId);
  if (!task || !window.confirm(`确定删除任务“${task.text}”吗？`)) return;
  personal.customTasks = personal.customTasks.filter(item => item.id !== taskId);
  saveState();
  renderPhases();
  updateProgress();
}

function deleteCustomResource(phaseId, resourceId) {
  const personal = getPhasePersonal(phaseId);
  const resource = personal.customResources.find(item => item.id === resourceId);
  if (!resource || !window.confirm(`确定删除资源“${resource.title}”吗？`)) return;
  personal.customResources = personal.customResources.filter(item => item.id !== resourceId);
  saveState();
  renderPhases();
}

function setupDialogs() {
  document.querySelectorAll('[data-close-dialog]').forEach(button => {
    button.addEventListener('click', () => button.closest('dialog').close());
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
  });

  document.querySelector('#planForm').addEventListener('submit', event => {
    event.preventDefault();
    const startDate = document.querySelector('#planStartDate').value;
    const endDate = document.querySelector('#planEndDate').value;
    if (startDate && endDate && endDate < startDate) {
      document.querySelector('#planEndDate').setCustomValidity('结束日期不能早于开始日期');
      document.querySelector('#planEndDate').reportValidity();
      return;
    }
    document.querySelector('#planEndDate').setCustomValidity('');
    getPhasePersonal(activePhaseId).plan = {
      goal: document.querySelector('#planGoal').value.trim(),
      startDate,
      endDate,
      weeklyHours: document.querySelector('#planWeeklyHours').value,
      weeklyPlan: document.querySelector('#planWeeklyPlan').value.trim(),
      notes: document.querySelector('#planNotes').value.trim()
    };
    saveState();
    document.querySelector('#planDialog').close();
    renderPhases();
  });

  document.querySelector('#clearPlanButton').addEventListener('click', () => {
    if (!activePhaseId || !window.confirm('确定清空这一阶段的个人计划吗？')) return;
    getPhasePersonal(activePhaseId).plan = {};
    saveState();
    document.querySelector('#planDialog').close();
    renderPhases();
  });

  document.querySelector('#resourceForm').addEventListener('submit', event => {
    event.preventDefault();
    const personal = getPhasePersonal(activePhaseId);
    const data = {
      type: document.querySelector('#resourceType').value,
      title: document.querySelector('#resourceTitle').value.trim(),
      author: document.querySelector('#resourceAuthor').value.trim(),
      url: document.querySelector('#resourceUrl').value.trim(),
      note: document.querySelector('#resourceNote').value.trim()
    };
    if (activeResourceId) {
      const resource = personal.customResources.find(item => item.id === activeResourceId);
      if (resource) Object.assign(resource, data);
    } else {
      personal.customResources.push({ id: createId('resource'), ...data });
    }
    saveState();
    document.querySelector('#resourceDialog').close();
    renderPhases();
  });

  document.querySelector('#taskForm').addEventListener('submit', event => {
    event.preventDefault();
    const text = document.querySelector('#taskText').value.trim();
    if (!text) return;
    const personal = getPhasePersonal(activePhaseId);
    if (activeTaskId) {
      const task = personal.customTasks.find(item => item.id === activeTaskId);
      if (task) task.text = text;
    } else {
      personal.customTasks.push({ id: createId('task'), text, done: false });
    }
    saveState();
    document.querySelector('#taskDialog').close();
    renderPhases();
    updateProgress();
  });
}

function updateProgress() {
  const defaultTotal = phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
  const customTasks = phases.flatMap(phase => getPhasePersonal(phase.id).customTasks);
  const total = defaultTotal + customTasks.length;
  const completeDefaults = Object.values(state.tasks).filter(Boolean).length;
  const completeCustom = customTasks.filter(task => task.done).length;
  const complete = completeDefaults + completeCustom;
  const percent = total ? Math.round((complete / total) * 100) : 0;
  document.querySelector('#progressValue').textContent = `${percent}%`;
  document.querySelector('#completedCount').textContent = complete;
  document.querySelector('#totalCount').textContent = total;
  document.querySelector('#progressRing').style.setProperty('--progress', `${percent * 3.6}deg`);

  let active = phases.length;
  for (let i = 0; i < phases.length; i += 1) {
    const phase = phases[i];
    const personal = getPhasePersonal(phase.id);
    const defaultDone = phase.tasks.every((_, index) => state.tasks[`${phase.id}-task-${index}`]);
    const customDone = personal.customTasks.every(task => task.done);
    if (!defaultDone || !customDone) {
      active = i + 1;
      break;
    }
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

let activeFilter = 'all';
function applyActiveFilter() {
  document.querySelectorAll('.filter-button').forEach(item => {
    item.classList.toggle('active', item.dataset.filter === activeFilter);
  });
  document.querySelectorAll('.phase-card').forEach(card => {
    card.classList.toggle('hidden', activeFilter !== 'all' && card.dataset.category !== activeFilter);
  });
}

function setupFilters() {
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      applyActiveFilter();
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
    if (!window.confirm('确定要清空所有勾选进度吗？个人计划和自定义资源会保留。')) return;
    state.tasks = {};
    state.checks = {};
    Object.values(state.personal.phases || {}).forEach(phase => {
      (phase.customTasks || []).forEach(task => { task.done = false; });
    });
    saveState();
    renderPhases();
    renderChecklist();
    updateProgress();
    updateChecklist();
  });
}

function setupDataManager() {
  const dialog = document.querySelector('#dataDialog');
  const fileInput = document.querySelector('#importDataFile');
  document.querySelector('#dataManagerButton').addEventListener('click', () => dialog.showModal());

  document.querySelector('#exportDataButton').addEventListener('click', () => {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      tasks: state.tasks,
      checks: state.checks,
      personal: state.personal
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `embedded-roadmap-backup-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  });

  document.querySelector('#importDataButton').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      if (!payload || typeof payload !== 'object') throw new Error('文件内容无效');
      if (!window.confirm('导入会覆盖当前学习进度和个人计划，确定继续吗？')) return;
      state.tasks = payload.tasks && typeof payload.tasks === 'object' ? payload.tasks : {};
      state.checks = payload.checks && typeof payload.checks === 'object' ? payload.checks : {};
      state.personal = payload.personal && typeof payload.personal === 'object' ? payload.personal : { phases: {} };
      saveState();
      window.location.reload();
    } catch (error) {
      window.alert(`导入失败：${error.message}`);
    } finally {
      fileInput.value = '';
    }
  });

  document.querySelector('#clearPersonalDataButton').addEventListener('click', () => {
    if (!window.confirm('确定删除所有个人计划、自定义任务和自定义资源吗？默认路线不会被删除。')) return;
    state.personal = { phases: {} };
    saveState();
    dialog.close();
    renderPhases();
    updateProgress();
  });
}

renderPhases();
renderProjects();
renderDirections();
renderChecklist();
setupFilters();
setupTheme();
setupReset();
setupDialogs();
setupDataManager();
updateProgress();
updateChecklist();
