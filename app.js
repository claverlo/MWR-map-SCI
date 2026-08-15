const challengeData = [
  {
    title: 'North Shore Trail',
    tag: 'Easy',
    distance: '4.8 km',
    time: '1h 42m',
    progress: 68,
    points: 180,
    status: 'Continue',
    elevation: '230 m',
    difficulty: 'easy',
    description: 'A breezy coastal route with sea cliffs, soft-sand switchbacks, and warm island views over the water.',
    location: 'North Shore',
    weather: 'Cool & clear',
    terrain: 'Coastal ridge',
    trailhead: 'Tamarisk Point',
    tags: ['Ocean views', 'Family friendly', 'Sea breeze']
  },
  {
    title: 'Windmill Climb',
    tag: 'Hard',
    distance: '8.2 km',
    time: '2h 50m',
    progress: 42,
    points: 260,
    status: 'Resume',
    elevation: '520 m',
    difficulty: 'hard',
    description: 'A steep ridge climb with exposed switchbacks, dry grass ridges, and a panoramic summit over the island.',
    location: 'Windmill Ridge',
    weather: 'Windy',
    terrain: 'Rocky ascent',
    trailhead: 'Old Windmill Road',
    tags: ['Ridge views', 'Steep climb', 'Sunset finish']
  },
  {
    title: 'Canyon Vista',
    tag: 'Medium',
    distance: '6.1 km',
    time: '2h 05m',
    progress: 81,
    points: 220,
    status: 'Finish',
    elevation: '310 m',
    difficulty: 'medium',
    description: 'An open canyon route with layered rock walls, long views, and a quiet finish near the plateau overlook.',
    location: 'Canyon Pass',
    weather: 'Mild',
    terrain: 'Dry canyon',
    trailhead: 'West Canyon Gate',
    tags: ['Wide ridge', 'Golden hour', 'Desert flora']
  },
  {
    title: 'Harbor Lookout',
    tag: 'Medium',
    distance: '5.6 km',
    time: '1h 58m',
    progress: 55,
    points: 210,
    status: 'Keep going',
    elevation: '280 m',
    difficulty: 'medium',
    description: 'A scenic island route with harbor views, short climbs, and a strong finish over the bay.',
    location: 'Harbor Point',
    weather: 'Sunny',
    terrain: 'Coastal step trail',
    trailhead: 'Boat Ramp Trail',
    tags: ['Harbor views', 'Quick loop', 'Best at dawn']
  }
];

const trailData = [
  {
    title: 'North Shore Trail',
    difficulty: 'easy',
    distance: '4.8 km',
    elevation: '230 m',
    time: '1h 42m',
    description: 'A breezy coastal walk with open water views and a light island challenge.',
    location: 'North Shore',
    weather: 'Cool & clear',
    terrain: 'Coastal ridge',
    trailhead: 'Tamarisk Point',
    tags: ['Ocean views', 'Family friendly', 'Sea breeze'],
    highlights: ['Gentle elevation with wide open coastline', 'Best for a morning hike with cool winds', 'Low technical difficulty and easy footing']
  },
  {
    title: 'Windmill Climb',
    difficulty: 'hard',
    distance: '8.2 km',
    elevation: '520 m',
    time: '2h 50m',
    description: 'A demanding ridge climb with steep sections and a panoramic island lookout.',
    location: 'Windmill Ridge',
    weather: 'Windy',
    terrain: 'Rocky ascent',
    trailhead: 'Old Windmill Road',
    tags: ['Ridge views', 'Steep climb', 'Sunset finish'],
    highlights: ['Exposed ridge line with wide panoramic island views', 'Great for seasoned hikers chasing elevation gain', 'Strong finish with a lookout over the sea']
  },
  {
    title: 'Canyon Vista',
    difficulty: 'medium',
    distance: '6.1 km',
    elevation: '310 m',
    time: '2h 05m',
    description: 'A scenic canyon route filled with layered rock, wide views, and island texture.',
    location: 'Canyon Pass',
    weather: 'Mild',
    terrain: 'Dry canyon',
    trailhead: 'West Canyon Gate',
    tags: ['Wide ridge', 'Golden hour', 'Desert flora'],
    highlights: ['Long canyon walls and open desert-like terrain', 'Ideal for a slow trail run or scenic walk', 'Excellent sunset photography from the overlook']
  },
  {
    title: 'Harbor Lookout',
    difficulty: 'medium',
    distance: '5.6 km',
    elevation: '280 m',
    time: '1h 58m',
    description: 'A moderate island route with harbor views and a dramatic final ridge finish.',
    location: 'Harbor Point',
    weather: 'Sunny',
    terrain: 'Coastal step trail',
    trailhead: 'Boat Ramp Trail',
    tags: ['Harbor views', 'Quick loop', 'Best at dawn'],
    highlights: ['Short climbs and steady grades across the ridge', 'Unobstructed views over the harbor and rugged coast', 'Perfect for a midday walk with a scenic turnaround']
  },
  {
    title: 'Lighthouse Point',
    difficulty: 'hard',
    distance: '9.4 km',
    elevation: '610 m',
    time: '3h 12m',
    description: 'The island’s signature long climb with exposed ridges, dry valleys, and distant ocean views.',
    location: 'East Bluff',
    weather: 'Breezy',
    terrain: 'High ridge',
    trailhead: 'South Signal Road',
    tags: ['Long haul', 'Island summit', 'Big payoff'],
    highlights: ['Longest route in the challenge with a classic summit push', 'A reward-heavy climb for strong hikers and trail runners', 'Shifting wind and wide views keep every section memorable']
  },
  {
    title: 'Cove Loop',
    difficulty: 'easy',
    distance: '3.7 km',
    elevation: '110 m',
    time: '1h 08m',
    description: 'A short seaside loop with driftwood shores, calm water, and a mellow island stroll.',
    location: 'South Cove',
    weather: 'Calm',
    terrain: 'Sandy shoreline',
    trailhead: 'Cove Access',
    tags: ['Short loop', 'Beach walk', 'Relaxed pace'],
    highlights: ['Easy terrain for recovery hikes and scenic breaks', 'Corridor of coastal grass and turquoise water', 'Ideal for quick wins and stress-free island exploring']
  }
];

const leaderboardData = [
  { name: 'Ava', points: 2360, badge: 'A' },
  { name: 'Noah', points: 2285, badge: 'N' },
  { name: 'Mila', points: 2110, badge: 'M' },
  { name: 'You', points: 1685, badge: 'Y' },
  { name: 'Zoe', points: 1580, badge: 'Z' }
];

const activityData = [
  { message: 'You completed the North Shore Trail', time: '2h ago' },
  { message: 'New badge unlocked: Island Explorer', time: 'Yesterday' },
  { message: 'Weekly goal reached: 12.5 km', time: '3 days ago' }
];

const liveHikerData = [
  { name: 'Maya', trail: 'North Shore Trail', status: 'On trail', distance: '2.4 km in', color: 'm' },
  { name: 'Leo', trail: 'Windmill Climb', status: 'Summit push', distance: '5.1 km in', color: 'l' },
  { name: 'Ari', trail: 'Canyon Vista', status: 'Taking photos', distance: '1.7 km in', color: 'a' }
];

const trailChatData = [
  { sender: 'Maya', text: 'The overlook is just ahead — great view!', time: 'Now' },
  { sender: 'Leo', text: 'Wind is strong on the ridge, but it is clear!', time: '2m ago' },
  { sender: 'Ari', text: 'Canyon section is beautiful and cool right now.', time: '6m ago' }
];

const badgeData = [
  { name: 'Island Explorer', icon: '🏝️' },
  { name: 'Sunrise Hiker', icon: '🌅' },
  { name: 'Summit Scout', icon: '🥾' },
  { name: 'Canyon Finder', icon: '🧭' },
  { name: 'Tide Walker', icon: '🌊' },
  { name: 'Peak Chaser', icon: '🏔️' }
];

const state = {
  distanceTotal: 22.8,
  streak: 7,
  points: 1685,
  badges: 5,
  weeklyProgress: 72,
  totalTimeMinutes: 168,
  selectedTrail: 'North Shore Trail',
  selectedElevation: '230 m',
  startRoute: false,
  currentScreen: 'dashboard'
};

const challengeList = document.getElementById('challenge-list');
const leaderboard = document.getElementById('leaderboard');
const activityFeed = document.getElementById('activity-feed');
const badgeGrid = document.getElementById('badge-grid');
const trailList = document.getElementById('trail-list');
const challengeDetail = document.getElementById('challenge-detail');
const selectedTrailName = document.getElementById('selected-trail-name');
const profileBadges = document.getElementById('profile-badges');
const startTrailBtn = document.getElementById('start-trail-btn');
const liveHikers = document.getElementById('live-hikers');
const trailChat = document.getElementById('trail-chat');
const chatInput = document.getElementById('chat-input');
const sendMessageBtn = document.getElementById('send-message-btn');

function formatDistance(value) {
  return `${value.toFixed(1)} km`;
}

function formatTime(minutes) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

function getSelectedTrail() {
  return trailData.find((trail) => trail.title === state.selectedTrail) || trailData[0];
}

function renderChallenges() {
  challengeList.innerHTML = challengeData
    .map(
      (challenge) => `
        <article class="challenge-card">
          <div class="challenge-top">
            <h4>${challenge.title}</h4>
            <span class="challenge-tag">${challenge.tag}</span>
          </div>
          <div class="challenge-meta">
            <span>${challenge.distance}</span>
            <span>${challenge.time}</span>
            <span>${challenge.points} pts</span>
          </div>
          <div class="challenge-progress">
            <div style="width: ${challenge.progress}%"></div>
          </div>
          <div class="challenge-bottom">
            <span>${challenge.progress}% complete</span>
            <button class="challenge-action ${challenge.progress > 50 ? 'primary' : ''}" data-title="${challenge.title}" data-elevation="${challenge.elevation}">${challenge.status}</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderLeaderboard() {
  leaderboard.innerHTML = leaderboardData
    .map(
      (entry, index) => `
        <li>
          <div class="rank-wrap">
            <span class="rank-number">${index + 1}</span>
            <span class="user-badge">${entry.badge}</span>
            <strong>${entry.name}</strong>
          </div>
          <span>${entry.points}</span>
        </li>
      `
    )
    .join('');
}

function renderActivity() {
  activityFeed.innerHTML = activityData
    .map(
      (item) => `
        <li>
          <div class="note">
            <strong>${item.message}</strong>
            <span class="time">${item.time}</span>
          </div>
          <span>✔</span>
        </li>
      `
    )
    .join('');
}

function renderBadges() {
  badgeGrid.innerHTML = badgeData
    .slice(0, 4)
    .map(
      (badge) => `
        <div class="badge-item">
          <div class="badge-icon">${badge.icon}</div>
          <span>Unlocked</span>
          <strong>${badge.name}</strong>
        </div>
      `
    )
    .join('');
}

function renderLiveHikers() {
  liveHikers.innerHTML = liveHikerData
    .map(
      (hiker) => `
        <div class="live-hiker-item">
          <div class="live-hiker-main">
            <span class="live-avatar">${hiker.color.toUpperCase()}</span>
            <div>
              <strong>${hiker.name}</strong>
              <small>${hiker.trail}</small>
            </div>
          </div>
          <div class="live-hiker-meta">
            <span>${hiker.status}</span>
            <button class="ghost-btn small">Message</button>
          </div>
        </div>
      `
    )
    .join('');
}

function renderTrailChat() {
  trailChat.innerHTML = trailChatData
    .map(
      (message) => `
        <li>
          <div class="chat-bubble">
            <strong>${message.sender}</strong>
            <p>${message.text}</p>
          </div>
          <span>${message.time}</span>
        </li>
      `
    )
    .join('');
}

function renderTrails() {
  trailList.innerHTML = trailData
    .map(
      (trail) => `
        <article class="trail-card">
          <div class="trail-top">
            <h3>${trail.title}</h3>
            <span class="difficulty-tag ${trail.difficulty}">${trail.difficulty}</span>
          </div>
          <p class="trail-description">${trail.description}</p>
          <div class="trail-meta">
            <span>${trail.distance}</span>
            <span>${trail.elevation}</span>
            <span>${trail.time}</span>
          </div>
          <div class="trail-footer">
            <span>${trail.title === state.selectedTrail ? 'Selected route' : 'Ready to hike'}</span>
            <button class="trail-button" data-title="${trail.title}" data-elevation="${trail.elevation}">Choose</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderChallengeDetail() {
  const trail = getSelectedTrail();
  selectedTrailName.textContent = trail.title;
  challengeDetail.innerHTML = `
    <div class="challenge-detail-card">
      <div class="challenge-top">
        <h3>${trail.title}</h3>
        <span class="difficulty-tag ${trail.difficulty}">${trail.difficulty}</span>
      </div>
      <p class="trail-description">${trail.description}</p>
      <div class="pill-row">
        ${trail.tags.map((tag) => `<span class="info-pill">${tag}</span>`).join('')}
      </div>
      <div class="detail-grid">
        <div class="mini-card">
          <span>Distance</span>
          <strong>${trail.distance}</strong>
        </div>
        <div class="mini-card">
          <span>Elevation</span>
          <strong>${trail.elevation}</strong>
        </div>
        <div class="mini-card">
          <span>Length</span>
          <strong>${trail.time}</strong>
        </div>
      </div>
    </div>

    <div class="challenge-detail-card">
      <h3>Trail overview</h3>
      <div class="route-preview">
        <div class="route-line"></div>
      </div>
      <ul class="detail-list">
        ${trail.highlights.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <div class="trail-meta">
        <span>Location: ${trail.location}</span>
        <span>Weather: ${trail.weather}</span>
      </div>
    </div>
  `;
}

function renderProfileBadges() {
  profileBadges.innerHTML = badgeData
    .map(
      (badge) => `
        <li>
          <span class="mini-badge-icon">${badge.icon}</span>
          <strong>${badge.name}</strong>
        </li>
      `
    )
    .join('');
}

function updateStats() {
  document.getElementById('distance-total').textContent = formatDistance(state.distanceTotal);
  document.getElementById('streak-total').textContent = `${state.streak} days`;
  document.getElementById('badge-total').textContent = state.badges;
  document.getElementById('points-total').textContent = state.points.toLocaleString();
  document.getElementById('weekly-progress').textContent = `${state.weeklyProgress}%`;
  document.getElementById('progress-fill').style.width = `${state.weeklyProgress}%`;
  document.getElementById('map-title').textContent = state.selectedTrail;
  document.getElementById('live-distance').textContent = formatDistance(state.distanceTotal / 3.8);
  document.getElementById('live-time').textContent = formatTime(state.totalTimeMinutes);
  document.getElementById('live-elevation').textContent = state.selectedElevation;

  const trail = getSelectedTrail();
  selectedTrailName.textContent = trail.title;
}

function addProgress() {
  state.distanceTotal += 0.7;
  state.points += 24;
  state.totalTimeMinutes += 9;
  state.weeklyProgress = Math.min(100, state.weeklyProgress + 7);

  if (state.distanceTotal >= 20 && state.badges < 5) {
    state.badges += 1;
    activityData.unshift({ message: 'New badge unlocked: Summit Scout', time: 'Just now' });
  }

  updateStats();
  renderActivity();
}

function showScreen(screenName) {
  state.currentScreen = screenName;
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === screenName);
  });

  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.screen === screenName);
  });
}

function setupInteractions() {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => {
      showScreen(button.dataset.screen);
    });
  });

  document.querySelectorAll('[data-screen]').forEach((button) => {
    button.addEventListener('click', (event) => {
      const targetScreen = event.currentTarget.dataset.screen;
      if (targetScreen) showScreen(targetScreen);
    });
  });

  document.querySelectorAll('.challenge-action').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTitle = button.dataset.title;
      const selectedElevation = button.dataset.elevation || '230 m';

      state.selectedTrail = selectedTitle;
      state.selectedElevation = selectedElevation;
      state.startRoute = true;
      button.textContent = 'Tracking';
      button.classList.add('primary');

      activityData.unshift({ message: `Started ${selectedTitle} challenge`, time: 'Just now' });
      renderActivity();
      updateStats();
      renderChallengeDetail();

      if (!button.dataset.looping) {
        button.dataset.looping = 'true';
        const interval = setInterval(() => {
          addProgress();
          if (state.weeklyProgress >= 100) {
            clearInterval(interval);
            button.textContent = 'Completed';
          }
        }, 2600);
      }
    });
  });

  document.querySelectorAll('.trail-button').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTitle = button.dataset.title;
      const selectedElevation = button.dataset.elevation || '230 m';

      state.selectedTrail = selectedTitle;
      state.selectedElevation = selectedElevation;
      renderTrails();
      renderChallengeDetail();
      updateStats();
      showScreen('challenge');
    });
  });

  sendMessageBtn.addEventListener('click', () => {
    const value = chatInput.value.trim();
    if (!value) return;

    trailChatData.unshift({ sender: 'You', text: value, time: 'Now' });
    renderTrailChat();
    chatInput.value = '';
  });

  startTrailBtn.addEventListener('click', () => {
    state.startRoute = true;
    const trail = getSelectedTrail();
    activityData.unshift({ message: `Started ${trail.title} challenge`, time: 'Just now' });
    renderActivity();
    showScreen('dashboard');
  });
}

renderChallenges();
renderLeaderboard();
renderActivity();
renderBadges();
renderLiveHikers();
renderTrailChat();
renderTrails();
renderChallengeDetail();
renderProfileBadges();
updateStats();
setupInteractions();
showScreen('dashboard');
