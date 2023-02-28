const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome.apply()).build()
const {addMovie, deleteMovie, crossMovie} = require('./automation')

beforeAll(async ()=>{
    await (await driver).get('http://127.0.0.1:5500/week6/day2/automation/movieList/index.html')
})

afterAll(async ()=>{
    await (await driver).quit()
})

test('Add movie into list', async()=>{
    addMovie(driver, 'jon')
    await driver.sleep(1000)
})

test('Add movie into list', async()=>{
    addMovie(driver, 'movie')
    await driver.sleep(1000)
})

test('Add movie into list', async()=>{
    addMovie(driver, 'movie2')
    await driver.sleep(1000)
})

test('Cross off movie', async()=> {
    
    crossMovie(driver, '//li[3]/span')
    await driver.sleep(1000)
})

test('Delete movie', async()=> {
    deleteMovie(driver, '#jon')
    await driver.sleep(1000)
})