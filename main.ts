
const VERSION = "1.2.0";

if (!settings.exists("version")) {
    settings.writeString("version", VERSION);
}