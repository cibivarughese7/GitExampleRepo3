class HomePage {

    constructor(page) {
        this.page = page
        this.aiWorkshopMenu = page.getByRole('link', { name: 'AI Workshop' })
    }

    async clickAIWorkshop() {
        await this.aiWorkshopMenu.click()
    }
}

module.exports = { HomePage }