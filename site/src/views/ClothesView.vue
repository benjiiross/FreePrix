<template>
  <NavigationBar />

  <h1 class="text-center m-5">Women</h1>
  <h2 class="text-center m-5">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tshirtList" />

  <h2 class="text-center m-5">Hoodies</h2>
  <HorizontalScrollComponent :articles="HoodieList" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="pantsList" />

  <h2 class="text-center m-5">Caps</h2>
  <HorizontalScrollComponent :articles="CapList" />

  <h1 class="text-center m-5 m-2">Men</h1>

  <h2 class="text-center m-5">Tee-shirts</h2>
  <HorizontalScrollComponent :articles="tshirtHList" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="HoodieHList" />

  <h2 class="text-center m-5">Pants</h2>
  <HorizontalScrollComponent :articles="pantsHList" />

  <h2 class="text-center m-5">Caps</h2>
  <HorizontalScrollComponent :articles="CapHList" />

  <PanelPhoto />
  <PutFoward2 />
  <AllLinks />
  <AboutUs />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import NavigationBar from "../components/NavigationBar.vue";
import PutFoward2 from "../components/PutFoward2.vue";
import PanelPhoto from "../components/PanelPhoto.vue";
import AllLinks from "../components/AllLinks.vue";
import HorizontalScrollComponent from "../components/HorizontalScrollComponent.vue";

export default {
  data() {
    return {
      tshirtList: [
        {
          id: 0,
          product: "Cute",
          image:
            "https://cf.shopee.com.my/file/844d1bb0f810c9d1842d8b9ad98234e7",
          description: "A white and brown crop-top",
        },
        {
          id: 1,
          product: "Leather",
          image:
            "https://i.pinimg.com/originals/fb/a1/2a/fba12a58b6cfdafafbe03c5e46e12d82.png",
          description: "A leather crop-top",
        },
        {
          id: 2,
          product: "Kakis",
          image:
            "https://img.joomcdn.net/815ef5a562e8c4c1382393bc9dc07f706609d90e_original.jpeg",
          description: "A green crop-top",
        },
        {
          id: 3,
          product: "Crop-top",
          image:
            "https://m.media-amazon.com/images/I/61zlwrRPDlL._AC_UL1500_.jpg",
          description: "A beige crop-top",
        },
        {
          id: 4,
          product: "Red",
          image:
            "https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/2D/79/rBVaV1xk07iAfCaCAAdkTOwYi5c452.jpg",
          description: "A red crop-top",
        },
        {
          id: 5,
          product: "Green",
          image: "https://i.ebayimg.com/images/g/ZkcAAOSwGm1gEmBC/s-l500.jpg",
          description: "A green crop-top",
        },
      ],

      pantsList: [
        {
          id: 0,
          product: "Beige",
          image:
            "https://s.alicdn.com/@sc04/kf/H184eb76fd0814d3ebb17db1c43666acao.jpg_720x720q50.jpg",
          description: "A beige cargo",
        },
        {
          id: 1,
          product: "Jean",
          image:
            "https://ae01.alicdn.com/kf/H5be9bf9ea98f486992d623f49258ed525/Streetwear-Women-s-Bodycon-Jeans-woman-Fashion-Patchwork-Harajuku-Aesthetic-Pants-Jeans-for-women-High-Waisted.jpg_Q90.jpg_.webp",
          description: "A blue jean two colors",
        },
        {
          id: 2,
          product: "Large",
          image:
            "https://img.joomcdn.net/ce08bd835227c3ec1971d225037ae157793f021d_original.jpeg",
          description: "A blue large jean",
        },
        {
          id: 3,
          product: "Blanc",
          image:
            "https://i.pinimg.com/originals/b1/70/ce/b170ce96dd4902f8589d69959ec48f96.jpg",
          description: "A white jogging",
        },
        {
          id: 4,
          product: "Nude",
          image:
            "https://ae01.alicdn.com/kf/H75254cfda8d44ee9890cf92f798f4e26M.jpg",
          description: "A nude jogging",
        },
        {
          id: 5,
          product: "Blue",
          image:
            "https://ae01.alicdn.com/kf/Sb9080a45157b4fcea0a511f1979cb36ag/High-Waist-Jeans-Women-Streetwear-Straight-Jean-Femme-Summer-Blue-Cotton-Cargo-Pants-Streetwear-Cool-Harajuku.jpg_.webp",
          description: "A large blue jean",
        },
      ],

      CapList: [
        {
          id: 0,
          product: "Black",
          image:
            "https://i5.walmartimages.com/asr/5895b815-a9d8-4a4b-b4a6-c94bef491a88.8b35351124b41017de63a51d8cd7bd2e.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
          description: "A black cap",
        },
        {
          id: 1,
          product: "Beige",
          image:
            "https://archzine.fr/wp-content/uploads/2021/03/comment-porte-une-casquette-femme-id%C3%A9e-stule-am%C3%A9ricain-femme-tenue-streetwear-typique.jfif_.jpg",
          description: "A beige cap",
        },
        {
          id: 2,
          product: "Creme",
          image:
            "https://i.pinimg.com/736x/99/50/bb/9950bb03f7838e2e15958e7301d3eb4b.jpg",
          description: "A creme cap",
        },
        {
          id: 3,
          product: "Ornament",
          image:
            "https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/2D/49/rBVaVF4Sw9uAZH0WAAc4M5zNGzA928.jpg",
          description: "A ornament black cap",
        },
        {
          id: 4,
          product: "Blue",
          image:
            "https://www.dhresource.com/0x0/f2/albu/g20/M01/C5/EF/rBVaqGEsZ2OAFEm_AADChlDUgCc283.jpg",
          description: "A blue cap",
        },
        {
          id: 5,
          product: "Yellow",
          image:
            "https://ae01.alicdn.com/kf/H2363a1858f404d8ca531761e3bf57617G/2022-New-Beanie-Women-Caps-for-Men-Streetwear-Hat-Bonnet-Beanies-Cap-Goth-Hip-Hop-Hats.jpg_Q90.jpg_.webp",
          description: "A yellow cap",
        },
      ],

      HoodieList: [
        {
          id: 0,
          product: "Flames",
          image:
            "https://ae01.alicdn.com/kf/Hbb23b9bb0a264747ab83777329390638e/Autumn-Fashion-Cute-Flaming-Fire-Print-Hoodie-Woman-Streetwear-Black-Casual-Loose-Hip-Hop-Pullover-Hoodies.jpg_Q90.jpg_.webp",
          description: "A oversize black hoodie with flames",
        },
        {
          id: 1,
          product: "Carolina",
          image:
            "https://ae01.alicdn.com/kf/H19814f406b144ab699779945fbee2ae5Q/Casual-Letter-Printed-Women-Sweatshirts-Loose-O-Neck-Long-Sleeve-Pullovers-Female-2022-Autumn-Fashion-Lady.jpg_Q90.jpg_.webp",
          description: "A North Carolina hoodie",
        },
        {
          id: 2,
          product: "NY",
          image:
            "//img.ltwebstatic.com/images3_pi/2021/11/25/163780656637972e28d436f603591076f4255fb0ae.webp",
          description: "A New York hoodie",
        },
        {
          id: 3,
          product: "Vail",
          image:
            "https://litb-cgis.rightinthebox.com/images/640x853/202201/bps/product/inc/xsladn1641266562303.jpg",
          description: "A blue open hoodie",
        },
        {
          id: 4,
          product: "Salem",
          image:
            "https://cdn.shopify.com/s/files/1/0301/1441/4730/products/sweat-femme-streetwear-chic-avec-col-553573_512x512.jpg?v=1631270590",
          description: "A dark blue hoodie",
        },
        {
          id: 5,
          product: "Rardic",
          image:
            "https://img.joomcdn.net/58689047c8f13a75abf709e2f9295b5406f1ea10_1024_1024.jpeg",
          description: "A blue hoodie",
        },
      ],

      tshirtHList: [
        {
          id: 0,
          product: "White",
          image:
            "https://www.cdiscount.com/pdt2/8/7/5/1/700x700/mp57600875/rw/t-shirt-a-col-roule-pour-homme-streetwear-couleu.jpg",
          description: "A white tee-shirt",
        },
        {
          id: 1,
          product: "Kaki",
          image:
            "https://sc04.alicdn.com/kf/H27a849546b2d4295a51f8f4b1c90a2b9W.jpg",
          description: "A kaki tee-shirt",
        },
        {
          id: 2,
          product: "Freshniss",
          image:
            "https://cdn.shopify.com/s/files/1/0263/6270/8027/products/T-shirt-Oversize-Dr-Hook-tenshi-streetwear-2_800x.jpg?v=1644498948",
          description: "A red tee-shirt",
        },
        {
          id: 3,
          product: "Lines",
          image:
            "http://sc04.alicdn.com/kf/H75da1ab3e17e408caeda86145a246084S.jpg",
          description: "A white tee-shirt with black lines",
        },
        {
          id: 4,
          product: "Butterfly",
          image:
            "https://cdn.shopify.com/s/files/1/0263/6270/8027/products/tshirt-batafurai_1600x.jpg?v=1623330900",
          description: "A black tee-shirt with a butterfly",
        },
        {
          id: 5,
          product: "Black",
          image:
            "https://www.cdiscount.com/pdt2/2/7/8/1/550x550/mp57574278/rw/t-shirt-a-col-roule-pour-homme-streetwear-couleu.jpg",
          description: "A black tee-shirt",
        },
      ],

      pantsHList: [
        {
          id: 0,
          product: "Jean",
          image:
            "https://m.media-amazon.com/images/I/71Cn7INgQQS._AC_SX679_.jpg",
          description: "A straight blue jean",
        },
        {
          id: 1,
          product: "Gray",
          image:
            "https://urbansapes.fr/media/catalog/product/cache/47969c47b57255357446b283e5a56cc2/p/a/pantalon-jogging-en-denim-pour-homme-baggy-streetwear-sw19114_4_.jpg",
          description: "A gray cargo",
        },
        {
          id: 2,
          product: "Kaki",
          image:
            "https://i.etsystatic.com/25090033/r/il/c30af8/3057108997/il_fullxfull.3057108997_mfyz.jpg",
          description: "A kaki cargo",
        },
        {
          id: 3,
          product: "Black",
          image:
            "https://ae01.alicdn.com/kf/H2d7b2e3c404f4b6d9b9e8ad68845efdbK/Pantalon-Cargo-uni-pour-gar-on-et-adolescent-de-4-12-ans-multi-poches-style-Streetwear.jpg_q50.jpg",
          description: "A black cargo",
        },
        {
          id: 4,
          product: "Colors",
          image:
            "https://www.cdiscount.com/pdt2/5/4/6/1/700x700/mp50907546/rw/minetom-jeans-homme-patchwork-couleur-bloc-denim-p.jpg",
          description: "A colorful jean",
        },
        {
          id: 5,
          product: "Blue",
          image:
            "https://www.dhresource.com/0x0/f2/albu/g17/M01/B1/C1/rBVa4mASstSANqqnAAJK8bss94k117.jpg",
          description: "A straight blue jean",
        },
      ],

      HoodieHList: [
        {
          id: 0,
          product: "Black",
          image:
            "https://cdn.shopify.com/s/files/1/0272/9059/9521/products/Sweat-shirt-hoodie-a-capuche-oversize-surdimentionne-Noir-Mixte-unisexe-pour-homme-femme-pas-cher-urb1-vetements-streetwear_620x.png?v=1611771214",
          description: "A black hoodie",
        },
        {
          id: 1,
          product: "Gray",
          image:
            "https://www.cdiscount.com/pdt2/7/2/6/1/700x700/mp36266726/rw/hommes-harajuku-streetwear-sweatshirts-sweat-capuc.jpg",
          description: "A gray hoodie",
        },
        {
          id: 2,
          product: "Brown",
          image:
            "https://cdn.shopify.com/s/files/1/0586/4220/2821/products/product-image-1810547344_600x.jpg?v=1640436244",
          description: "A brown hoodie",
        },
        {
          id: 3,
          product: "Pink",
          image:
            "https://cdn.shopify.com/s/files/1/0272/9059/9521/products/Sweat-shirt-hoodie-a-capuche-oversize-surdimentionne-Rose-Mixte-unisexe-pour-homme-femme-pas-cher-urb1-vetements-streetwear-2_620x.png?v=1604419469",
          description: "A pink hoodie",
        },
        {
          id: 4,
          product: "Creme",
          image:
            "https://www.cdiscount.com/pdt2/6/3/8/1/700x700/mp36452638/rw/hommes-harajuku-streetwear-sweatshirts-sweat-capuc.jpg",
          description: "A creme hoodie",
        },
        {
          id: 5,
          product: "Basic",
          image:
            "https://cdn.shopify.com/s/files/1/0272/9059/9521/products/Sweat-shirt-hoodie-a-capuche-oversize-surdimentionne-Gris-clair-Mixte-unisexe-pour-homme-femme-pas-cher-urb1-vetements-streetwear-3_620x.png?v=1604419469",
          description: "A basic gray hoodie",
        },
      ],

      CapHList: [
        {
          id: 0,
          product: "Black",
          image:
            "https://i.pinimg.com/originals/99/03/7d/99037dccc4cec22c8ae69ab6dbc73420.jpg",
          description: "A black cap",
        },
        {
          id: 1,
          product: "Green",
          image:
            "https://cache.mrporter.com/variants/images/1647597279310358/ou/w2000_q60.jpg",
          description: "A green cap",
        },
        {
          id: 2,
          product: "Creme",
          image:
            "https://cdn.shopify.com/s/files/1/0581/7004/8690/products/VisieregolfecrueCommunegolf3_600x.jpg?v=1647508815",
          description: "A creme cap",
        },
        {
          id: 3,
          product: "Ornament",
          image:
            "https://www.dhresource.com/webp/m/0x0/f2/albu/g8/M00/2D/49/rBVaVF4Sw9uAZH0WAAc4M5zNGzA928.jpg",
          description: "A ornament black cap",
        },
        {
          id: 4,
          product: "Gray",
          image:
            "https://cdn.shopify.com/s/files/1/0397/0396/9949/products/vbc_alberto_bucket_hat_grey_4_1200x.jpg?v=1603189050",
          description: "A gray cap",
        },
        {
          id: 5,
          product: "Light gray",
          image:
            "https://cdn.shopify.com/s/files/1/0553/7100/6130/products/1940084-108.0556_650x.jpg?v=1652732985",
          description: "A light gray cap",
        },
      ],
    };
  },
  components: {
    AboutUs,
    NavigationBar,
    PutFoward2,
    PanelPhoto,
    AllLinks,
    HorizontalScrollComponent,
  },
};
</script>

<style></style>
