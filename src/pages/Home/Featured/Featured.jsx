import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle heading='Featured Item' subHeading='check it out' />
            <div className="md:flex justify-center items-center bg-slate-600 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2020</p>
                    <p className="uppercase">Where Can I Get Some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit repellat eum quia assumenda corrupti nulla, impedit obcaecati voluptatem atque natus? Veritatis, totam! Corrupti reiciendis exercitationem non dolore suscipit in dicta maiores. Deleniti corporis itaque rerum magnam, dicta sed tenetur deserunt ex quidem voluptatum enim accusamus eligendi quod minima voluptas commodi?</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;