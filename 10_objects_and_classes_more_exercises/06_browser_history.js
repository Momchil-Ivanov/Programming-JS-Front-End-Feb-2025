function browserHistory(browserData, commands) {
    let browser = JSON.parse(JSON.stringify(browserData));

    for (let command of commands) {
        if (command === "Clear History and Cache") {
            browser = {
                "Browser Name": browser["Browser Name"],
                "Open Tabs": [],
                "Recently Closed": [],
                "Browser Logs": []
            };
            continue;
        }

        let [action, site] = command.split(" ");
        
        if (action === "Open") {
            browser["Open Tabs"].push(site);
            browser["Browser Logs"].push(command);
        } 
        else if (action === "Close") {
            let tabIndex = browser["Open Tabs"].indexOf(site);
            if (tabIndex !== -1) {
                browser["Open Tabs"].splice(tabIndex, 1);
                browser["Recently Closed"].push(site);
                browser["Browser Logs"].push(command);
            }
        }
    }

    console.log(browser["Browser Name"]);
    console.log(`Open Tabs: ${browser["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${browser["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${browser["Browser Logs"].join(", ")}`);
}

// let browserData1 = {
//     "Browser Name": "Google Chrome",
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// };
// let commands1 = ["Close Facebook", "Open StackOverFlow", "Open Google"];
// browserHistory(browserData1, commands1);

// let browserData2 = {
//     "Browser Name": "Mozilla Firefox",
//     "Open Tabs": ["YouTube"],
//     "Recently Closed": ["Gmail", "Dropbox"],
//     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
// };
// let commands2 = ["Open Wikipedia", "Clear History and Cache", "Open Twitter"];
// browserHistory(browserData2, commands2);
