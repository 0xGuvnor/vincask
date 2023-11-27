import ParallexItem from "./ParallexItem";

const ParallaxContainer = () => {
  return (
    <section className="flex flex-col gap-10 overflow-x-clip md:gap-64">
      <ParallexItem
        years={"1825"}
        title="Establishment and Early Years"
        description="Port Ellen was founded in 1825 on Islay's rugged south coast. It began
        its journey in a former malt mill near the small town of Port Ellen,
        setting the stage for a legacy that would resonate through the
        centuries."
      />
      <ParallexItem
        years={"1930s - 1967"}
        title="The Silent Years"
        description="After navigating through the early whisky industry's ebbs and flows, Port Ellen faced a significant challenge. The economic depression of the 1930s led to its closure, marking the beginning of a silent period that lasted over three decades."
        odd
      />
      <ParallexItem
        years={"1967 - 1983"}
        title="Revival and Modern Production"
        description="In 1967, in a renewed spirit of optimism, Port Ellen was refitted and reopened. This era witnessed the production of the whisky that would later become a cult favorite. The distillery, during these sixteen years, crafted a unique peaty, maritime character that was distinct to Islay whiskies."
      />
      <ParallexItem
        years={"1983"}
        title="The Whisky Loch and Final Closure"
        description="The early 1980s saw an industry-wide overproduction, famously known as the 'whisky loch', leading to numerous distillery closures across Scotland. Port Ellen, unfortunately, was among those affected and ceased operations in 1983. This closure, while a setback, unknowingly contributed to the rarity and desirability of its whiskies."
        odd
      />
      <ParallexItem
        title="Rise to Cult Status"
        description="Post-closure, the whisky produced by Port Ellen attained mythical status among aficionados. Its distinctive smoky and coastal profile, combined with a limited supply, transformed it into a highly sought-after collectible. Bottles of Port Ellen, especially from the 1970s distillates, became must-haves for serious collectors and investors."
      />
      <ParallexItem
        years="2024"
        title="Legacy and Rebirth"
        description="As time progressed, Port Ellen's whiskies not only retained but grew in value and acclaim, symbolizing a pinnacle of whisky craftsmanship. The distillery, slated to reopen, is poised to create a new chapter in its illustrious history, blending tradition with contemporary whisky-making."
        odd
      />
    </section>
  );
};
export default ParallaxContainer;
