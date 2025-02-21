import { ExploreData } from "../types/app";
import { getExplore } from "../utils/api";
import ExploreCard from "./ExploreCard";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();

  return (
    <section className="pt-6">
      <div className="container">
        <h2 className="text-4xl font-semibold mb-5">Explore nearby</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <ExploreCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
