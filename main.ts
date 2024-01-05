
const VERSION = "1.2.0";
const DEBUG = false;

if (DEBUG) {
    game.stats = true;
    settings.clear();
}

if (!settings.exists("version")) {
    settings.writeString("version", VERSION);
}