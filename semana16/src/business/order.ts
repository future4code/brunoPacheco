export class Order {
    private picture: string
    private paperSize: PaperSize
    private paperType: PaperType
    private borderType: BorderType
    private borderSize: BorderSize
    private borderColor: BorderColor

    constructor(
        picture: string,
        paperSize: PaperSize,
        paperType: PaperType,
        borderType: BorderType,
        borderSize: BorderSize,
        borderColor: BorderColor
    ) {
        this.picture = picture
        this.paperSize = paperSize
        this.paperType = paperType
        this.borderType = borderType
        this.borderSize = borderSize
        this.borderColor = borderColor
    }

    public calculatePaperPrice() {
        const totalPaperPrice = 10
        return totalPaperPrice
    }

    public calculateBorderPrice() {
        const totalBorderPrice= 5
        return totalBorderPrice
    }

    public calculateTotalPrice() {
        const total = this.calculateBorderPrice() + this.calculatePaperPrice()
        return total
    }

}

enum PaperSize {
    "13x18" = 20.00,
    "21x30" = 27.80,
    "30x30" = 35.40,
    "30x42" = 42.30,
    "42x60" = 55.60
}

enum PaperType {
    "Brilhante" = 1.00,
    "Fosco" = 1.05,
    "Fibra" = 1.12,
    "Resinado" = 1.42,
    "Perola" = 1.53
}

enum BorderType {
    "Crua" = 15.00,
    "Lisa" = 32.00,
    "Classica" = 43.00,
    "Vintage" = 52.50,
    "Madeira" = 60.00
}

enum BorderSize {
    "Pequeno" = 0.25,
    "Media" = 0.50,
    "Grande" = 0.75
}

enum BorderColor {
    "AMARELO" = "amarela",
    "VERMELHO" = "vermelha",
    "AZUL" = "azul",
    "LARANJA" = "laranja",
    "VERDE" = "verde",
    "ROXA" = "roxa"
}
