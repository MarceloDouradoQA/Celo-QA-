package portfolio;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CheckoutTest {
    private WebDriver driver;
    private CheckoutPage checkout;

    @BeforeEach
    void openShop() {
        var options = new ChromeOptions();
        options.addArguments("--headless=new");
        String chrome = System.getenv("CHROMIUM_PATH");
        if (chrome != null) options.setBinary(chrome);
        driver = new ChromeDriver(options);
        checkout = new CheckoutPage(driver, System.getenv().getOrDefault("BASE_URL", "http://127.0.0.1:3000"));
    }

    @AfterEach
    void closeBrowser() {
        if (driver != null) driver.quit();
    }

    @Test
    void confirmsOrder() {
        checkout.submit("keyboard", 1);
        assertTrue(checkout.awaitStatus().contains("confirmado"));
    }

    @Test
    void rejectsQuantityAboveStock() {
        checkout.submit("mouse", 99);
        assertEquals("Estoque insuficiente.", checkout.awaitStatus());
    }
}
