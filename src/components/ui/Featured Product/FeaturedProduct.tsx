import Title from "../../Re-useable/Title";
import Card from "../Product Card/Card";


const FeaturedProduct = () => {
    return (
        <div className="my-10">
            {/* title div  */}
            <div>
            <Title mainText="Featured Products" additionalText="Show a few highlighted products with a button to view the details page" />
            </div>

            {/* card div  */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </div>
    );
};

export default FeaturedProduct;