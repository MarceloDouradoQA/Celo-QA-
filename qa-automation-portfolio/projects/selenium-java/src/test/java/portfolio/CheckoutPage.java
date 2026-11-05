package portfolio;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

final class CheckoutPage {
    private static final By PRODUCT = By.id("product");
    private static final By QUANTITY = By.id("quantity");
    private static final By SUBMIT = By.cssSelector("button[type=submit]");
    private static final By STATUS = By.cssSelector("[role=status]");
    private final WebDriver driver;
    private final WebDriverWait wait;

    CheckoutPage(WebDriver driver, String baseUrl) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.get(baseUrl);
    }

    void submit(String product, int quantity) {
        wait.until(ExpectedConditions.elementToBeClickable(SUBMIT));
        new Select(driver.findElement(PRODUCT)).selectByValue(product);
        var input = driver.findElement(QUANTITY);
        input.clear();
        input.sendKeys(Integer.toString(quantity));
        driver.findElement(SUBMIT).click();
    }

    String awaitStatus() {
        return wait.until(currentDriver -> {
            String text = currentDriver.findElement(STATUS).getText();
            return text.isBlank() ? null : text;
        });
    }
}
