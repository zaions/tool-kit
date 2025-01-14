export const textAreaMaxLength = 10000;
export const smsCodeExpiryInSeconds = 600;
export const imageSizeLimit = 4; // in MB
export const phoneAttemptsLimit = 3;

export const CHART_TYPES: {
  value: string;
  label: string;
}[] = [
  { value: 'bar', label: 'Bar' },
  { value: 'line', label: 'Line' },
  { value: 'doughnut', label: 'Doughnut' },
  { value: 'pie', label: 'Pie' },
  { value: 'polar', label: 'Polar' },
];

export const CHART_OPTIONS = {
  maintainAspectRatio: false,
  scales: { y: { beginAtZero: true, precision: 0 } },
  plugins: {
    legend: {
      display: true,
      labels: {
        boxWidth: 0,
        font: {
          size: 18,
        },
      },
    },
  },
};

export const CHART_DATASET_OPTIONS: {
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
  barThickness: number;
} = {
  backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 99, 232, 0.2)',
    'rgba(54, 162, 135, 0.2)',
    'rgba(255, 206, 186, 0.2)',
    'rgba(75, 192, 12, 0.2)',
    'rgba(153, 202, 55, 0.2)',
    'rgba(25, 159, 64, 0.2)',
  ],
  borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(255, 99, 32, 1)',
    'rgba(54, 162, 35, 1)',
    'rgba(255, 206, 186, 1)',
    'rgba(75, 292, 192, 1)',
    'rgba(153, 202, 255, 1)',
    'rgba(255, 259, 64, 1)',
  ],
  borderWidth: 1,
  barThickness: 30,
};

export const GOOGOLE_OAUTH_STATIC_URL =
  'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=online&response_type=token&scope=email%20profile&flowName=GeneralOAuthFlow';
export const LINKEDIN_OAUTH_STATIC_URL =
  'https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_liteprofile%20r_emailaddress';

export const AUTH_REDIRECTS = {
  GOOGLE_AUTH_SIGNIN_CALLBACK: '/social-auth/googlesignin/callback',
  GOOGLE_AUTH_SIGNUP_CALLBACK: '/social-auth/googlesignup/callback',
  FACEBOOK_AUTH_SIGNUP_CALLBACK: '/social-auth/facebooksignup/callback',
  FACEBOOK_AUTH_SIGNIN_CALLBACK: '/social-auth/facebooksignin/callback',
  LINKEDIN_AUTH_CALLBACK: '/social-auth/linkedin/callback',
  LINKEDIN_AUTH_SIGNUP_CALLBACK: '/social-auth/linkedinsignup/callback',
  LINKEDIN_AUTH_SIGNIN_CALLBACK: '/social-auth/linkedinsignin/callback',
  GOOGLE_AUTH_CALLBACK: '/social-auth/google/callback',
  FACEBOOK_AUTH_CALLBACK: '/social-auth/facebook/callback',
  AUTH_REDIRECT_HANDLER: '/auth-redirect-handler',
  MS_AUTH_REDIRECT: '/ms-auth',
  MicrosoftTeamsConfigTab: '/microsoft-teams/channel-app/config',
};

export const FACEBOOK_OAUTH_URL =
  'https://www.facebook.com/v12.0/dialog/oauth?response_type=token&scope=email';
export const TRUNCATE_TEXT_LENGTH_SMALL = 10;
export const TRUNCATE_TEXT_LENGTH_MEDIUM = 30;
export const USER_DATA_DOMAIN_COOKIE_KEY = 'perkforceUserDataCookieKey';

// localstorage data keys names
export const LOCAL_STORAGE_KEY = {
  TOKEN: 'pf_r32_4ui3_234', // TOKEN_LOCALSTORAGE_KEY
  ADMIN_TOKEN: 'pf_r32_nhg_5t', // ADMIN_TOKEN_LOCALSTORAGE_KEY
  IMPERSONATION_MODE: 'vcx_sdf_Ge_rhb', // IMPERSONATE_LOCALSTORAGE_KEY
  USER_INFO: 'we_lk_gpf_rre_23', // USER_LOCALSTORAGE_KEY
  SHOW_MODAL_STATUS: 're_2we_lk_gpf_r3', // SHOW_MODAL_LOCALSTORAGE_KEY
  EMAIL_VERIFICATION_TOKEN: 'wer_Vssdf_vf_r3', // VERIFY_EMAIL_TOKEN_LOCALSTORAGE_KEY
  PAGE_REFRESH_STATUS: 'ds09sdf_vf_r3', // PAGE_REFRESHED_ONCE_LOCALSTORAGE_KEY
  REDIRECT_TO_MOBILE_APP: 'dscr38g4-234-r23-4_Vd2', // TRY_AND_REDIRECT_USER_TO_MOBILE_APP
  DEVICE_UUID: 'WFE_vwevV_sf_F-ssdfdsf_', // DEVICE_UUID_LOCALSTORAGE_KEY
  GET_USER_UPDATED_AT: 'pf_3i3_9das42_30', // GET_USER_API_UPDATED_AT
  TOKEN_HEADER: 'cus_5rge_svsb_5pf_3r', // TOKEN_HEADER_KEY
  USER_HEADER: 'o5r_5pf_3r4ui3_90', // USER_HEADER_KEY
  IMPERSONATION_HEADER: 'r4uo5r_5pf_3i3_90', // IMPERSONATE_HEADER_KEY
  VERIFY_EMAIL_TOKEN_HEADER: 'r_5vnopf_3i3_90', // VERIFY_EMAIL_TOKEN_HEADER_KEY
  TOKEN_VERIFICATION_URL: 'rb_5pf_3_3i3_90', // TOKEN_VERIFICATION_URL_KEY
  SLACK_AUTH_REDIRECT_HANDLER_COOKIE: 'r4uipf_r4uii3_90', // SLACK_AUTH_REDIRECT_HANDLER_COOKIE_KEY
  MS_AUTH_REDIRECT_HANDLER_COOKIE: 'rhj---44-4ii3_90',
};

// store the active user auth token
export const TOKEN_LOCALSTORAGE_KEY = 'pf_r32_4ui3_234';
// store admin auth token
export const ADMIN_TOKEN_LOCALSTORAGE_KEY = 'pf_r32_nhg_5t';
// store (true|false) depending on impersonation state, (true if impersonating a account)
export const IMPERSONATE_LOCALSTORAGE_KEY = 'vcx_sdf_Ge_rhb';
// store user data (encrypted object containing user data)
export const USER_LOCALSTORAGE_KEY = 'we_lk_gpf_rre_23';
// store (true|false) depending on model state, (true if showing model)
export const SHOW_MODAL_LOCALSTORAGE_KEY = 're_2we_lk_gpf_r3';
// store user token and email=true data as encrypted object
export const VERIFY_EMAIL_TOKEN_LOCALSTORAGE_KEY = 'wer_Vssdf_vf_r3';
// store (true|false) depending on page_last_refresh state, (true if page was refreshed in last call)
export const PAGE_REFRESHED_ONCE_LOCALSTORAGE_KEY = 'ds09sdf_vf_r3';
// i (ahsan) will use this key to check whether i have already tried to redirect user to mobile app when user clicks on a email login link, i will also use this keep to redirect user to mobile app when he opens the url manually in mobile browser
export const TRY_AND_REDIRECT_USER_TO_MOBILE_APP = 'dscr38g4-234-r23-4_Vd2';

// header auth keys names (should be same in backend and frontend otherwise will throw error)
// store value of 'TOKEN_LOCALSTORAGE_KEY'
export const TOKEN_HEADER_KEY = 'cus_5rge_svsb_5pf_3r';
// store a encrypted object containing value of user email from 'USER_LOCALSTORAGE_KEY' and token from 'TOKEN_LOCALSTORAGE_KEY' for API auth verification
export const USER_HEADER_KEY = 'o5r_5pf_3r4ui3_90';
// store value of 'IMPERSONATE_LOCALSTORAGE_KEY'
export const IMPERSONATE_HEADER_KEY = 'r4uo5r_5pf_3i3_90';
// store value of 'VERIFY_EMAIL_TOKEN_LOCALSTORAGE_KEY'
export const VERIFY_EMAIL_TOKEN_HEADER_KEY = 'r_5vnopf_3i3_90';
// store time info when we fetched the getUser api data last time on navigation change
export const GET_USER_API_UPDATED_AT = 'pf_3i3_9das42_30';

// url token key
// using this key in URL of manual email auth callback verification
export const TOKEN_VERIFICATION_URL_KEY = 'rb_5pf_3_3i3_90';

export const MS_AUTH_REDIRECT_HANDLER_COOKIE_KEY = 'rhj---44-4ii3_90';

export const SLACK_AUTH_REDIRECT_HANDLER_COOKIE_KEY = 'r4uipf_r4uii3_90';
export const APP_BUNDLE_ID = 'com.perkforce.app';
export const FIREBASE_RESPONSES = {
  CLOSED_BY_USER: 'auth/popup-closed-by-user',
};

export const PERKFORCE_DOMAINS: string[] = [
  'perkforce.com',
  'pfstag.com',
  'pfdevqa.com',
  'pfnew.com',
  'pfuniverse.com',
];

export const PERK_MANAGEMENT_STEP = {
  LIST: 'list',
  ADD: 'add',
} as const;

export const LOTTIE_ANIMATION_START_DELAY = 2000; // 2s (please provide in miliseconds)

export const APPS_STORE_LINK = {
  ANDROID: 'https://play.google.com/store/apps/details?id=com.perkforce.app',
  IOS: 'https://apps.apple.com/pk/app/perkforce/id1608229415',
};

export const DEVICE_UUID_LOCALSTORAGE_KEY = 'WFE_vwevV_sf_F-ssdfdsf_';

export const SocketIoEvents = {
  // frontend clients will emit these events and server will listen for them
  client: {
    perksDataChanged: 'perksDataChanged__client', // client will emit this when a manager changes perks data (by adding, updating or deleting a perk) | params { employerId } | known use case to cover, when a merchant changes his data, as he is not the employer of the users where i should clear the data
  },
  // frontend clients will listen these events and server will emit these events
  server: {
    perksDataChanged: 'perksDataChanged__server', // client will listen for this event (emitted by server, when server received 'SocketIoEvents.client.perksDataChanged' event from client)
  },
};

export const carouselDefaultSettings = {
  autoplay: false,
  autoplaySpeed: 3,
  effect: 'scrollx',
  dots: true,
  arrows: false,
};

export const cardDefaultSettings = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  xxl: 8,
};

export const TOOLTIP_TRIGGER_ALL: string[] = [
  'click',
  'hover',
  'focus',
  'contextMenu',
];

export const POPOVER_TRIGGER: string[] = ['click', 'hover'];

export const PERKFORCE_DETAILS = {
  supportEmail: 'support@perkforce.com',
  webAppUrl: 'https://my.perkforce.com',
  androidAppUrl:
    'https://play.google.com/store/apps/details?id=com.perkforce.app',
  iosAppUrl: 'https://apps.apple.com/pk/app/perkforce/id1608229415',
};
