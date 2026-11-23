class WaitlistPage {

    constructor(page) {
        this.page = page
        this.email = page.getByPlaceholder('Email Address')
        this.timezone = page.locator('select').nth(0)
        this.framework = page.locator('select').nth(1)
        this.source = page.locator('select').nth(2)
        this.joinButton = page.getByRole('button', { name: 'Join the waitlist' })
        this.successMsg = page.getByText('on the waitlist')
    }

    async enterEmail(email) {
        await this.email.fill(email)
    }

    async selectTimezone() {
        await this.timezone.selectOption({ index: 1 })
    }

    async selectFramework() {
        await this.framework.selectOption({ index: 1 })
    }

    async selectSource() {
        await this.source.selectOption({ index: 1 })
    }

    async clickJoin() {
        await this.joinButton.click()
    }
}

module.exports = { WaitlistPage }