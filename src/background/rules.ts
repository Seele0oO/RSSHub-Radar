import { Storage } from "@plasmohq/storage"
import { getRemoteRules } from "~/lib/rules"
import { getConfig } from "~/lib/config"

const storage = new Storage({
  area: "local"
})

export const refreshRules = async () => {
  const rules = await getRemoteRules()
  await storage.set("rules", rules)
  chrome.runtime.sendMessage({
    target: "offscreen",
    data: {
      name: "requestDisplayedRules",
      body: {
        rules,
      }
    }
  })
  return rules
}

export const getDisplayedRules = () => storage.get("displayedRules")

export const setDisplayedRules = (displayedRules) => storage.set("displayedRules", displayedRules)

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'refreshRulesAlarm') {
    refreshRules();
  }
});

export async function initSchedule() {
  const config = await getConfig();
  const rules = await storage.get("rules")
  if (!rules) {
    setTimeout(() => {
      refreshRules();
    }, 60 * 1000);
  }

  const alarm = await chrome.alarms.get("refreshRulesAlarm");
  if (!alarm) {
    chrome.alarms.create('refreshRulesAlarm', {
      periodInMinutes: config.refreshTimeout / 60,
    });
  }
}
