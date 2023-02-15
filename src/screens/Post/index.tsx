import { useRef, useState } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { ProgressBar } from "../../components/ProgressBar";
import { styles } from "./styles";

interface ScrollProps {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
}

export function Post() {
  const [percentage, setPercentage] = useState(0);

  const scrollRef = useRef<ScrollView>(null);

  const dimensions = useWindowDimensions();

  function scrollPercentage({
    contentSize,
    contentOffset,
    layoutMeasurement,
  }: ScrollProps) {
    const visibleContent = Math.ceil(
      (dimensions.height / contentSize.height) * 100
    );

    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

    setPercentage(Math.floor(value) <= visibleContent ? 0 : value);
  }

  function handleScrollMoveTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
        ref={scrollRef}
        scrollEventThrottle={16}
      >
        <Text style={styles.title}>Lorem Ipsum</Text>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
            consequatur debitis nemo perferendis, eos enim provident, nesciunt
            quos, sapiente beatae iusto est cum consectetur dolorum sit ullam?
            Rerum, dolore?
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
            consequatur debitis nemo perferendis, eos enim provident, nesciunt
            quos, sapiente beatae iusto est cum consectetur dolorum sit ullam?
            Rerum, dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. In unde iure voluptate. Maiores quo nisi reprehenderit ipsum a
            consectetur soluta deserunt vel. Quia enim perspiciatis possimus
            porro laboriosam. Incidunt, debitis?
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
            consequatur debitis nemo perferendis, eos enim provident, nesciunt
            quos, sapiente beatae iusto est cum consectetur dolorum sit ullam?
            Rerum, dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ea, ipsum? Autem maiores in ullam esse, consectetur, illum,
            hic voluptate sit rerum beatae et. Voluptatem a earum delectus aut
            aliquid ratione. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tempora maiores, labore aliquam magni laborum, quae animi
            quibusdam modi officia doloribus magnam sapiente quidem quis
            aperiam, laudantium beatae quia facere possimus.
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum
            consequatur debitis nemo perferendis, eos enim provident, nesciunt
            quos, sapiente beatae iusto est cum consectetur dolorum sit ullam?
            Rerum, dolore? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tempora maiores, labore aliquam magni laborum, quae animi
            quibusdam modi officia doloribus magnam sapiente quidem quis
            aperiam, laudantium beatae quia facere possimus. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Tempora maiores, labore
            aliquam magni laborum, quae animi quibusdam modi officia doloribus
            magnam sapiente quidem quis aperiam, laudantium beatae quia facere
            possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Tempora maiores, labore aliquam magni laborum, quae animi quibusdam
            modi officia doloribus magnam sapiente quidem quis aperiam,
            laudantium beatae quia facere possimus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Tempora maiores, labore aliquam magni
            laborum, quae animi quibusdam modi officia doloribus magnam sapiente
            quidem quis aperiam, laudantium beatae quia facere possimus. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Tempora maiores,
            labore aliquam magni laborum, quae animi quibusdam modi officia
            doloribus magnam sapiente quidem quis aperiam, laudantium beatae
            quia facere possimus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempora maiores, labore aliquam magni laborum,
            quae animi quibusdam modi officia doloribus magnam sapiente quidem
            quis aperiam, laudantium beatae quia facere possimus. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Tempora maiores,
            labore aliquam magni laborum, quae animi quibusdam modi officia
            doloribus magnam sapiente quidem quis aperiam, laudantium beatae
            quia facere possimus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempora maiores, labore aliquam magni laborum,
            quae animi quibusdam modi officia doloribus magnam sapiente quidem
            quis aperiam, laudantium beatae quia facere possimus. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Tempora maiores,
            labore aliquam magni laborum, quae animi quibusdam modi officia
            doloribus magnam sapiente quidem quis aperiam, laudantium beatae
            quia facere possimus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempora maiores, labore aliquam magni laborum,
            quae animi quibusdam modi officia doloribus magnam sapiente quidem
            quis aperiam, laudantium beatae quia facere possimus. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Tempora maiores,
            labore aliquam magni laborum, quae animi quibusdam modi officia
            doloribus magnam sapiente quidem quis aperiam, laudantium beatae
            quia facere possimus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tempora maiores, labore aliquam magni laborum,
            quae animi quibusdam modi officia doloribus magnam sapiente quidem
            quis aperiam, laudantium beatae quia facere possimus. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Tempora maiores,
            labore aliquam magni laborum, quae animi quibusdam modi officia
            doloribus magnam sapiente quidem quis aperiam, laudantium beatae
            quia facere possimus.
          </Text>
        </View>
      </ScrollView>

      <ProgressBar
        value={percentage}
        onMoveTop={handleScrollMoveTop}
      />
    </View>
  );
}
