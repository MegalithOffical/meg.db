export type Timezones = "Pacific/Niue" | "Pacific/Pago_Pago" | "Pacific/Honolulu" | "Pacific/Rarotonga" | "Pacific/Tahiti" | "Pacific/Marquesas" | "America/Anchorage" | "Pacific/Gambier" | "America/Los_Angeles" | "America/Tijuana" | "America/Vancouver" | "America/Whitehorse" | "Pacific/Pitcairn" | "America/Dawson_Creek" | "America/Denver" | "America/Edmonton" | "America/Hermosillo" | "America/Mazatlan" | "America/Phoenix" | "America/Yellowknife" | "America/Belize" | "America/Chicago" | "America/Costa_Rica" | "America/El_Salvador" | "America/Guatemala" | "America/Managua" | "America/Mexico_City" | "America/Regina" | "America/Tegucigalpa" | "America/Winnipeg" | "Pacific/Galapagos" | "America/Bogota" | "America/Cancun" | "America/Cayman" | "America/Guayaquil" | "America/Havana" | "America/Iqaluit" | "America/Jamaica" | "America/Lima" | "America/Nassau" | "America/New_York" | "America/Panama" | "America/Port-au-Prince" | "America/Rio_Branco" | "America/Toronto" | "Pacific/Easter" | "America/Caracas" | "America/Asuncion" | "America/Barbados" | "America/Boa_Vista" | "America/Campo_Grande" | "America/Cuiaba" | "America/Curacao" | "America/Grand_Turk" | "America/Guyana" | "America/Halifax" | "America/La_Paz" | "America/Manaus" | "America/Martinique" | "America/Port_of_Spain" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Santo_Domingo" | "America/Thule" | "Atlantic/Bermuda" | "America/St_Johns" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Bahia" | "America/Belem" | "America/Cayenne" | "America/Fortaleza" | "America/Godthab" | "America/Maceio" | "America/Miquelon" | "America/Montevideo" | "America/Paramaribo" | "America/Recife" | "America/Santiago" | "America/Sao_Paulo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Atlantic/Stanley" | "America/Noronha" | "Atlantic/South_Georgia" | "America/Scoresbysund" | "Atlantic/Azores" | "Atlantic/Cape_Verde" | "Africa/Abidjan" | "Africa/Accra" | "Africa/Bissau" | "Africa/Casablanca" | "Africa/El_Aaiun" | "Africa/Monrovia" | "America/Danmarkshavn" | "Atlantic/Canary" | "Atlantic/Faroe" | "Atlantic/Reykjavik" | "Etc/GMT" | "Europe/Dublin" | "Europe/Lisbon" | "Europe/London" | "Africa/Algiers" | "Africa/Ceuta" | "Africa/Lagos" | "Africa/Ndjamena" | "Africa/Tunis" | "Africa/Windhoek" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Brussels" | "Europe/Budapest" | "Europe/Copenhagen" | "Europe/Gibraltar" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Monaco" | "Europe/Oslo" | "Europe/Paris" | "Europe/Prague" | "Europe/Rome" | "Europe/Stockholm" | "Europe/Tirane" | "Europe/Vienna" | "Europe/Warsaw" | "Europe/Zurich" | "Africa/Cairo" | "Africa/Johannesburg" | "Africa/Maputo" | "Africa/Tripoli" | "Asia/Amman" | "Asia/Beirut" | "Asia/Damascus" | "Asia/Gaza" | "Asia/Jerusalem" | "Asia/Nicosia" | "Europe/Athens" | "Europe/Bucharest" | "Europe/Chisinau" | "Europe/Helsinki" | "Europe/Istanbul" | "Europe/Kaliningrad" | "Europe/Kyiv" | "Europe/Riga" | "Europe/Sofia" | "Europe/Tallinn" | "Europe/Vilnius" | "Africa/Khartoum" | "Africa/Nairobi" | "Antarctica/Syowa" | "Asia/Baghdad" | "Asia/Qatar" | "Asia/Riyadh" | "Europe/Minsk" | "Europe/Moscow" | "Asia/Tehran" | "Asia/Baku" | "Asia/Dubai" | "Asia/Tbilisi" | "Asia/Yerevan" | "Europe/Samara" | "Indian/Mahe" | "Indian/Mauritius" | "Indian/Reunion" | "Asia/Kabul" | "Antarctica/Mawson" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Dushanbe" | "Asia/Karachi" | "Asia/Tashkent" | "Asia/Yekaterinburg" | "Indian/Kerguelen" | "Indian/Maldives" | "Asia/Calcutta" | "Asia/Colombo" | "Asia/Katmandu" | "Antarctica/Vostok" | "Asia/Almaty" | "Asia/Bishkek" | "Asia/Dhaka" | "Asia/Omsk" | "Asia/Thimphu" | "Indian/Chagos" | "Asia/Rangoon" | "Indian/Cocos" | "Antarctica/Davis" | "Asia/Bangkok" | "Asia/Hovd" | "Asia/Jakarta" | "Asia/Krasnoyarsk" | "Asia/Saigon" | "Asia/Ho_Chi_Minh" | "Indian/Christmas" | "Antarctica/Casey" | "Asia/Brunei" | "Asia/Choibalsan" | "Asia/Hong_Kong" | "Asia/Irkutsk" | "Asia/Kuala_Lumpur" | "Asia/Macau" | "Asia/Makassar" | "Asia/Manila" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Taipei" | "Asia/Ulaanbaatar" | "Australia/Perth" | "Asia/Pyongyang" | "Asia/Dili" | "Asia/Jayapura" | "Asia/Seoul" | "Asia/Tokyo" | "Asia/Yakutsk" | "Pacific/Palau" | "Australia/Adelaide" | "Australia/Darwin" | "Antarctica/DumontDUrville" | "Asia/Magadan" | "Asia/Vladivostok" | "Australia/Brisbane" | "Asia/Yuzhno-Sakhalinsk" | "Australia/Hobart" | "Australia/Sydney" | "Pacific/Chuuk" | "Pacific/Guam" | "Pacific/Port_Moresby" | "Pacific/Efate" | "Pacific/Guadalcanal" | "Pacific/Kosrae" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pohnpei" | "Asia/Kamchatka" | "Pacific/Auckland" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Nauru" | "Pacific/Tarawa" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Apia" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Tongatapu" | "Pacific/Kiritimati";

export interface BackupOptions {
  /**
   * Is Backup system enabled.
   */
  enabled: boolean;

  /**
   * CronJob Pattern for Backup creator.
   */
  CronJobPattern: string;

  /**
   * Timezone for Backup creator.
   */
  timezone: Timezones;

  /**
   * Where the backups will be.
   */
  folderPath: string;
}

export interface ProviderOptions {

  /**
   * File path of database file.
   */
  filePath: string;

  /**
   * Faster Saving Method.
   */
  useExperimentalSaveMethod?: boolean;

  /**
   * Backup Options
   */
  backupOptions?: BackupOptions;
}

/**
 * Default Provider Options.
 */
export const ProviderDefaultOptions: ProviderOptions = {
  filePath: "megdb",
  useExperimentalSaveMethod: false,
  backupOptions: {
    enabled: false,
    CronJobPattern: "0 0 * * *",
    timezone: "Europe/Istanbul",
    folderPath: "./Backups"
  },
}