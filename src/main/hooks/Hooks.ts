import {After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status} from "@cucumber/cucumber";
import {closeDriver, destroy, initializeDriver, launch, page} from "../helpers/DriverHelper";
import * as fs from "node:fs";
import {promisify} from "util";

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
    await initializeDriver();
});

Before(async (pickle) => {
    console.log("=========== Test Case Started ===========");
    console.log(pickle.pickle.name);
    await launch();
});

After(async function ({pickle, result}) {
    if (result?.status === Status.FAILED) {
        const screenshot: Buffer = await takeScreenShot(pickle.name);
        if (screenshot.length > 1) this.attach(screenshot, 'image/png');
    }
    console.log("=========== Test Case Ended ===========");
    await destroy();
});

AfterAll(async () => {
    await closeDriver();
});

async function takeScreenShot(fileName:string) {
    try {
        const screenshotPath = `./output/screenshots/${fileName}.png`;
        await page.screenshot({
            path: screenshotPath,
            type: 'png'
        });
        const readFileAsync = promisify(fs.readFile);
        return await readFileAsync(screenshotPath);
    } catch (error) {
        throw new Error('Failed to take screenshot');
    }
}