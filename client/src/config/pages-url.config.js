class BOARD {
    root = '/'

    HOME = this.root
    PROFILE = `${this.root}/profile`
    USERS = `${this.root}/users`
    CARS = `${this.root}/cars`
    MY_CAR = `${this.root}/my-car`
}

export const BOARD_PAGES = new BOARD()