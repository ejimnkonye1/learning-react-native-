const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// Get the default Metro configuration
const config = getDefaultConfig(__dirname);

// Add 'cjs' to the resolver source extensions
config.resolver.sourceExts.push('cjs');

// Apply NativeWind to the config
module.exports = withNativeWind(config, { input: './global.css' });