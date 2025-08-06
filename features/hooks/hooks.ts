import { Before, After, BeforeAll,AfterAll,Status} from '@cucumber/cucumber';

import fs from 'fs';
import path from 'path';
import { CustomWorld } from '../support/world'

Before(async function (this: CustomWorld) {
  await this.launchBrowser();
});
After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshotPath = path.resolve(`screenshots/${Date.now()}.png`);
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
    await this.page.screenshot({ path: screenshotPath });

    const buffer = fs.readFileSync(screenshotPath);
    await this.attach(buffer, 'image/png');
  }

  await this.closeBrowser();
});
   