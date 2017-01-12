const isProduction = process.env.NODE_ENV === 'production'
export const EMAIL = isProduction ? 'info@swazisundowners.com' : 'adamgoldman7@gmail.com'
export const GOOGLE_MAPS_API_KEY = isProduction ? 'AIzaSyArFGNUV9DhdfltcC1bNfLcHbUa14QwjlE' : 'AIzaSyCs0g0kWRALBmnoLkk04JF5RPY0zsSp7nk'
