export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const EMAIL = IS_PRODUCTION ? 'info@swazisundowners.com' : 'adamgoldman7@gmail.com'
export const GOOGLE_MAPS_API_KEY = IS_PRODUCTION ? 'AIzaSyArFGNUV9DhdfltcC1bNfLcHbUa14QwjlE' : 'AIzaSyCs0g0kWRALBmnoLkk04JF5RPY0zsSp7nk'
export const BASE_IMAGE_PATH = `${window.location.protocol}//${window.location.host}/images`
