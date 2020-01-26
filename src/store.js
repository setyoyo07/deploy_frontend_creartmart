import createStore from "unistore";
import axios from 'axios';

const initState = {
    listPopularProduct : [],
    listLimitedProduct : [],
    listCategoryProduct : [],
    listProductDetail: [],
    listShopInfo:[],
    listShopProduct: [],
    listUserProfile: [],
    listCartData: [],
    listCheckoutData:[],
    listReviewCartData: [],
    listReviewProductData: [],
    listOrderHistoryData: [],
    listSellerHistoryData: [],
    listAdminCategoryData: [],
    shippingAddressData: '',
    isLoading : true,
    isRegister : false,
    isLogin: false,
    token: localStorage.getItem("token"),
    category: "accessoris",
    productId: "",
    shopId:"",
    cartId:"",
    transactionDetailId:"",
    userName: "",
    userEmail: "",
    userContact: "",
    userAddress: "",
    userAccountNumber: "",
    userImage: "",
    productsName:"",
    productsPrice:0,
    productsCategory:"",
    productsSubcategory:"",
    productsDescription:"",
    productsWeight:0,
    productsStock:0,
    productsImage:"",
    isLimited:true,
    quantityProduct:0,
    shopName: "",
    shopEmail: "",
    shopContact: "",
    shopProvince: "",
    shopCityType:"Kabupaten",
    shopCityName: "",
    shopPostalCode: "",
    shopStreet: "",
    shopImage: "",
    shippingCountry: "",
    shippingProvince: "",
    shippingCityType: "Kabupaten",
    shippingCityName: "",
    shippingStreet: "",
    shippingPostalcode: "",
    shippingCourier: "jne",
    paymentMethod:"1",
    username: "",
    password: "",
    email: "",
    accountNumber: "",
    keyword: "",
    isAdmin: false,
    typeText: "password",
    editable: false
    
};

export const store = createStore(initState);

export const action = store => ({
    
    // fungsi request u/ mendapatkan data popular product untuk halaman home
    getPopularProduct: async (state,event) => {
        const req = {
            method: "get",    
            url: "https://creartmart.site/public/products/popular?rp=4",
          };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listPopularProduct: response.data, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
        },
    
    // fungsi request data limited product untuk halaman home
    getLimitedProduct: async (state,event) => {
        const req = {
            method: "get",    
            url: "https://creartmart.site/public/products/limited?rp=4",
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listLimitedProduct: response.data, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
        },
    
    // fungsi request semua data produk berdasarkan kategorinya
    getAllCategoryProduct: async (state,event) => {
        let endpoint
        if (state.category === 'popular' || state.category === 'limited' || state.category === 'promo'){
            endpoint = "https://creartmart.site/public/products/"+state.category
        } else {
            endpoint = "https://creartmart.site/public/products?category="+state.category
        }
        
        const req = {
            method: "get",    
            url: endpoint
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listCategoryProduct: response.data, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
        },
    
    // fungsi untuk request data detail produk, dengan parameter input product_id
    getProductDetail: async (state,event) => {

        const req = {
            method: "get",    
            url: "https://creartmart.site/public/products/"+state.productId
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listProductDetail: response.data, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
        },
    
    // fungsi untuk request data profil toko berdasarkan id tokonya
    getShopInfo: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/public/shops/"+state.shopId
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listShopInfo: response.data.result,
                    listShopProduct: response.data.product,
                    isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
        },
    
    // fungsi untuk handle input form, dengan output disimpan kedalam suatu variabeldi store
    handleInput: (state,event) => {
        store.setState({ [event.target.name]: event.target.value });
        },

    // fungsi untuk handle data register yang akan di post dan disimpan kedalam database
    handleStateRegister: async (state,event) => {
        const username = state.username
        const password = state.password
        const email = state.email
        const accountNumber = state.accountNumber
        const mydata = {
        username: username,
        password: password,
        email: email,
        account_number: accountNumber
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"post",
            url: "https://creartmart.site/users/register",
            headers: {
                "Content-Type": "application/json"
            },
            data: mydata
        };

        const self = store;
        await axios(req)
        .then(function (response) {
            self.setState({isRegister: true});
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk handle proses login, mengirim data login ke backend dan menerima data token jika login sukses
    handleStateLogin: async (state,event) => {
        const username = state.username
        const password = state.password
        const mydata = {
        username: username,
        password: password
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"post",
            url: "https://creartmart.site/users/login",
            headers: {
                "Content-Type": "application/json"
            },
            data: mydata
        };
        const self = store;
        await axios(req)
        .then(function (response) {
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            self.setState({isAdmin: response.data.admin});
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk handle proses logout, menghapus data token
    handleLogoutState: (state, event) => {
        localStorage.removeItem("token");
        // store.setState({is_login: false,
        // token:null});
    },

    // fungsi untuk request data profilmilik user
    getUserProfile: async (state,event) => {
        const req = {
            method: "get",
            url: "https://creartmart.site/users/info",
            headers: {
                Authorization: "Bearer " + state.token
              }
            };
        console.warn("cek req", req)
        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listUserProfile: response.data, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
        },

    //fungsi untuk request data tokomilik user
    getUserShop: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/users/shops",
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listShopInfo: response.data.result,
                    listShopProduct: response.data.product,
                    isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

    // fungsi untuk menambahkan data produk baru oleh user pemilik toko kedalam database
    postProduct: async (state,event) => {
        const name = state.productsName
        const price = state.productsPrice
        const image = state.productsImage
        const category = state.productsCategory
        const subcategory = state.productsSubcategory
        const description = state.productsDescription
        const limited = state.isLimited
        const stock = state.productsStock
        const weight = state.productsWeight
        const mydata = {
        name: name,
        price: price,
        image: image,
        category: category,
        subcategory:subcategory,
        description:description,
        limited: limited,
        stock:stock,
        weight:weight
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"post",
            url: "https://creartmart.site/users/shops/product",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token
            },
            data: mydata
        };

        await axios(req)
        .then(function (response) {
            alert('Success! Your product online now')
        })
        .catch(function (error) {
            alert('Sorry, please complete your shop profile first')
            console.log(error);
        });
    },

    // fungsi untuk mengubah data porfil tokomilik user
    putShopProfile: async (state,event) => {
        const name = state.shopName
        const email = state.shopEmail
        const contact = state.shopContact
        const province = state.shopProvince
        const city_type = state.shopCityType
        const city_name = state.shopCityName
        const postalcode = state.shopPostalCode
        const street_address = state.shopStreet
        const image = state.shopImage
        const mydata = {
        name: name,
        email: email,
        contact: contact,
        province: province,
        city_type: city_type,
        city_name: city_name,
        postalcode: postalcode,
        street_address: street_address,
        image: image
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"put",
            url: "https://creartmart.site/users/shops",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token
            },
            data: mydata
        };

        const self = store;
        await axios(req)
        .then(function (response) {
            self.setState({ listShopInfo: response.data,
                isLoading: false});
            console.log(response.data);
            alert('Success! Your shop profile is update')
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk menambahkan data produk ke keranjang milik user
    postCart: async (state,event) => {
        const productId = state.productId
        const quantity = state.quantityProduct
        const mydata = {
        product_id: productId,
        quantity: quantity,
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"post",
            url: "https://creartmart.site/users/carts",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token
            },
            data: mydata
        };

        await axios(req)
        .then(function (response) {
            alert('Success! Your cart is update')
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk request data keranjang milik user
    getCartData: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/users/carts",
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listCartData: response.data,
                    isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

    // fungsi untuk menambahkan alamat pengiriman dari proses checkout suatu keranjang
    postAddress: async (state,event) => {
        const courier = state.shippingCourier
        const country = state.shippingCountry
        const province = state.shippingProvince
        const city_type = state.shippingCityType
        const city_name = state.shippingCityName
        const street = state.shippingStreet
        const postal_code = state.shippingPostalcode
        const mydata = {
        courier: courier,
        country: country,
        province: province,
        city_type: city_type,
        city_name: city_name,
        street: street,
        postal_code: postal_code
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"post",
            url: "https://creartmart.site/users/checkout/"+state.cartId,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token
            },
            data: mydata
        };
        console.warn("cek token", req)
        const self = store;
        await axios(req)
        .then(function (response) {
            self.setState({ listCheckoutData: response.data,
                isLoading: false});
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk request data checkout suatu keranjang milik user
    getCheckoutData: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/users/checkout/"+state.cartId,
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listCheckoutData: response.data,
                    isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
            console.warn("cekout", state.listCheckoutData)
    },

    // funsi untuk menambahkan data metode pembayaran proses checkout suatu keranjang milik user
    postPayment: async (state,event) => {

        const req = {
            method:"post",
            url: "https://creartmart.site/users/history/order/"+state.cartId+"?payment_id="+state.paymentMethod,
            headers: {
                Authorization: "Bearer " + state.token
            }
        };

        await axios(req)
        .then(function () {
            alert('Your checkout is success!')
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    //fungsi untuk mengubah data profil milik user
    putUserProfile: async (state,event) => {
        const username = state.username
        const password = state.password
        const name = state.userName
        const email = state.userEmail
        const contact = state.userContact
        const account_number = state.userAccountNumber
        const address = state.userAddress
        const image = state.userImage
        const mydata = {
        username: username,
        password: password,
        name: name,
        email: email,
        contact: contact,
        account_number: account_number,
        address: address,
        image: image
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"put",
            url: "https://creartmart.site/users/info",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token
            },
            data: mydata
        };

        const self = store;
        await axios(req)
        .then(function (response) {
            self.setState({ listUserProfile: response.data,
                isLoading: false});
            console.log(response.data);
            alert('Success! Your profile is update')
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk request data history/review transaksi detail milik user, dengan parameter input cartId
    getReviewTransactionData: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/users/history/order/"+state.cartId,
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listReviewCartData: response.data.result,
                    shippingAddressData: response.data.shipping_address.street + ", " +
                    response.data.shipping_address.city_type + " " + 
                    response.data.shipping_address.city_name + ", " +
                    response.data.shipping_address.province + ", " +
                    response.data.shipping_address.country + ", " +
                    response.data.shipping_address.postal_code + "(Courier : " +
                    response.data.shipping_address.courier + " )",
                    listReviewProductData: response.data.transaction_detail,
                    isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

    // fungsi untuk merubah data produk dari suatu tokomilik user
    putProduct: async (state,event) => {
        const name = state.productsName
        const price = state.productsPrice
        const image = state.productsImage
        const category = state.productsCategory
        const subcategory = state.productsSubcategory
        const description = state.productsDescription
        const limited = state.isLimited
        const stock = state.productsStock
        const weight = state.productsWeight
        const mydata = {
        name: name,
        price: price,
        image: image,
        category: category,
        subcategory:subcategory,
        description:description,
        limited: limited,
        stock:stock,
        weight:weight
        };

        console.warn("cek mydata", mydata)
        const req = {
            method:"put",
            url: "https://creartmart.site/users/shops/product/"+state.productId,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + state.token
            },
            data: mydata
        };

        await axios(req)
        .then(function (response) {
            alert('Success! Your product already update')
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk menghapus data produk dari suatu toko milik user
    deleteProduct: async (state,event) => {
        
        const req = {
            method:"delete",
            url: "https://creartmart.site/users/shops/product/"+state.productId,
            headers: {
                Authorization: "Bearer " + state.token
            }
        };

        await axios(req)
        .then(function () {
            alert('Success! Your product already delete')
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk menghapus data produkper item dari suatu keranjang milik user
    deleteCart: async (state,event) => {
        
        const req = {
            method:"delete",
            url: "https://creartmart.site/users/carts/"+state.transactionDetailId,
            headers: {
                Authorization: "Bearer " + state.token
            }
        };

        await axios(req)
        .then(function () {
            alert('Success! Your cart already delete')
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // fungsi untuk request data hasil pencarian denan input berupa suatu keyword
    getAllSearchProduct: async (state,event) => {

        const req = {
            method: "get",    
            url: "https://creartmart.site/public/products/search?keyword="+state.keyword
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listCategoryProduct: response.data, isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
        },
    
    // fungsi untuk request data order history miliki user
    getOrderHistoryData: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/users/history/order",
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listOrderHistoryData: response.data});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

    // fungsi untuk request data seller history milik seller
    getSellerHistoryData: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/users/history/seller",
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listSellerHistoryData: response.data});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

    // fungsi untuk request data history/review transaksi detail milik seller, dengan parameter input cartId
    getSellerHistoryDetail: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/users/history/seller/"+state.cartId,
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listReviewCartData: response.data.result,
                    shippingAddressData: response.data.shipping_address.street + ", " +
                    response.data.shipping_address.city_type + " " + 
                    response.data.shipping_address.city_name + ", " +
                    response.data.shipping_address.province + ", " +
                    response.data.shipping_address.country + ", " +
                    response.data.shipping_address.postal_code + "(Courier : " +
                    response.data.shipping_address.courier + " )",
                    listReviewProductData: response.data.transaction_detail,
                    isLoading: false});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

    // fungsi untuk menghandle fitur see password ketika user mengisi form
    handleSeePassword: (state, event) => {
        if(state.typeText === "password"){
            store.setState({typeText: "text"})
        } else {
            store.setState({typeText: "password"})
        }
    }, 

    // fungsi untuk request semua data user/shop/product/transaction/payment oleh admin
    getAdminCategoryData: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/admin/"+state.category,
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listAdminCategoryData: response.data});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

    // fungsi untuk request data user/shop/product/transaction/payment spesifik by idoleh admin
    getAdminSearchData: async (state,event) => {

        const req = {
            method: "get",
            url: "https://creartmart.site/admin/"+state.category+"/"+state.keyword,
            headers: {
                Authorization: "Bearer " + state.token
                }
            };

        const self = store;
        await axios(req)
            .then(function(response){
                self.setState({ listAdminCategoryData: response.data});
                console.log(response.data);
            })
            .catch(function(error){
                self.setState({isLoading: false});
                console.log(error)
            })
    },

});
