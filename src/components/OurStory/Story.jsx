import React from "react";
import Img from "../../assets/outStory/img.jpg";

const Story = () => {
  return (
    <div className="w-full bg-DarkGray">
      <div className="flex flex-col items-center px-4 pt-20 pb-10 mx-auto md:pb-20 lg:w-2/3 md:pt-44 md:px-8 lg:px-0">
        <p className="text-3xl lg:text-[40px] text-center md:w-3/4 leading-normal">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <div className="pt-28 md:pt-60">
          <img src={Img} alt="Img" />
          <p className="pt-2.5 text-sm leading-loose md:pt-12 w-72">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-16 leading-loose md:pt-32 lg:pt-40 lg:w-1/2">
          <p>
            The following text is placeholder known as “lorem ipsum,” which is
            scrambled Latin used by designers to mimic real copy. Lorem ipsum
            dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi
            vestibulum, ligula ut efficitur mollis, mi massa accumsan justo,
            accumsan auctor orci lectus ac ipsum. Proin porta nisl sem, ac
            suscipit lorem dignissim et. Curabitur euismod nec augue vitae
            dictum. Nam mattis, massa quis consequat molestie, erat justo
            vulputate tortor, a sollicitudin turpis felis eget risus. Aliquam
            viverra urna felis, eu ornare enim consectetur sed. Morbi vitae
            ultrices velit. Sed molestie consectetur metus. Proin neque eros,
            dapibus ac accumsansodales sit.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
