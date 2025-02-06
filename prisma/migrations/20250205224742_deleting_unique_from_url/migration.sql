-- DropIndex
DROP INDEX `WeatherImage_url_key` ON `weatherimage`;

-- AlterTable
ALTER TABLE `weatherimage` MODIFY `url` VARCHAR(191) NOT NULL DEFAULT 'bg-[url(https://weather.files.bbci.co.uk/weather-web-lambda-forecast-renderer/327/src/images/G3/@1x-G3_white-cloud-night.jpg)]';
