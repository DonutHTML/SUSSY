import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("Hello world!");
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
// Import necessary modules or dependencies
import { VendettaPluginAPI, DiscordAPI } from 'vendetta-plugin-sdk';

// Define your plugin class
class BadgeAdderPlugin {
  private vendettaAPI: VendettaPluginAPI;
  private discordAPI: DiscordAPI;

  constructor() {
    // Initialize Vendetta Plugin API
    this.vendettaAPI = new VendettaPluginAPI();

    // Initialize Discord API
    this.discordAPI = new DiscordAPI();

    // Register your plugin with Vendetta
    this.vendettaAPI.registerPlugin('BadgeAdder', '1.0.0', 'Your Plugin Description');
  }

  // Function to add a badge to a Discord profile locally
  addBadgeToProfile(userId: string, badgeName: string): void {
    // Check if the user exists
    if (this.discordAPI.userExists(userId)) {
      // Add the badge to the user's profile
      this.discordAPI.addBadge(userId, badgeName);

      // Log a success message
      console.log(`Badge '${badgeName}' added to Discord user with ID '${userId}'.`);
    } else {
      // Log an error message if the user doesn't exist
      console.error(`Discord user with ID '${userId}' not found.`);
    }
  }

  // Example function to be called when the plugin is triggered
  onPluginTrigger(): void {
    // Replace 'USER_ID' and 'YOUR_BADGE_NAME' with actual values
    this.addBadgeToProfile('1092019780652896357, 'AMONG US');
  }
}

// Instantiate and run the plugin
const badgeAdderPlugin = new BadgeAdderPlugin();
badgeAdderPlugin.onPluginTrigger();
