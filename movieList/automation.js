const {By} = require('selenium-webdriver')

const addMovie = async (driver, movietitle)=> {
    await driver.findElement(By.css('input')).sendKeys(`${movietitle}`)
    await driver.findElement(By.css('button')).click()
    await driver.sleep(5000)
}

const crossMovie = async (driver, element)=> {
    await driver.findElement(By.xpath(`${element}`)).click()
    await driver.sleep(5000)
}

const deleteMovie = async (driver, movieId)=> {
    await driver.findElement(By.css(`${movieId}`)).click()
    await driver.sleep(5000)
}

module.exports = {
    addMovie,
    crossMovie,
    deleteMovie
}