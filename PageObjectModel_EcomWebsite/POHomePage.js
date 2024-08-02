exports.HomePage =
class HomePage 
{   
    /**
    *@param {import('@playwright/test').Page} page
    */
    constructor(page)
    {
        this.page = page;
        this.productList = page.locator(".card-body") // home page product body section
        //this.productTitleName = page.locator(".card-body b") // home page product text
        //this.productTitleName = ".card-body b"// home page product name
        //this.AddTocartProduct = page.locator("[class='btn w-10 rounded']"); // Add to cart button
        this.clickonCartIcon = page.locator("[routerlink='/dashboard/cart']") // cart button
    }

    // async addingProductToCart (productName2)
    // {
    //     // const Products = await this.productList.allTextContents();
    //     // console.log(Products)
    //     const Products = await this.productList.count()
    //     for (const Product of Products)
    //     {
    //         if (await this.Product.locator("//b[normalize-space()='IPHONE 13 PRO']").textContent() === await productName2)
    //         {
    //             //await product.click();
    //             await this.Product.locator('text=Add To Cart').click();
    //             //break;
    //         }
    //     }
    //   }

    async addingProductToCart (productName2)
    {
        
        
        const GetproductTitleName = await this.productList.allTextContents()

        //const productTitle = await this.page.locator(this.productTitleName).allTextContents();
        console.log(GetproductTitleName)
        //const productListcount = await this.productList.count();
        const productListcount = await this.productList.count();
        for (let i=0; i<productListcount; i++)
        {
            if (await this.productList.nth(i).locator("b").textContent() === await productName2)
            {
                await this.productList.nth(i).locator("text= Add To Cart").click();
                break;
            }

            // if (await this.GetproductTitleName.nth(i).textContent() === await productName2)
            //     {
            //         //await this.GetproductTitleName.nth(i).locator("text= Add To Cart").click();
            //         await this.GetproductTitleName.nth(i).getByRole('button', { name: ' Add To Cart' }).nth(2).click();
            //         break;
            //     }
        }
    }

    
    async ClickOnCartIcon()
    {
        await this.clickonCartIcon.click();

    }

}

