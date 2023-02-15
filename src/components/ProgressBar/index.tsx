import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  ZoomInDown,
  ZoomOutDown,
} from "react-native-reanimated";

import { styles } from "./style";

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

interface Props {
  value: number;
  onMoveTop: () => void;
}

export function ProgressBar({ value, onMoveTop }: Props) {
  const widthContainer = useSharedValue(200);

  const endReached = value >= 95;

  const animateStyle = useAnimatedStyle(() => ({
    width: widthContainer.value,
  }));

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.4 });
  }, [value]);

  return (
    <Animated.View style={[styles.container, animateStyle]}>
      {endReached ? (
        <TouchableOpacityAnimated
          entering={ZoomInDown}
          exiting={ZoomOutDown}
          onPress={onMoveTop}
        >
          <Feather
            name="arrow-up"
            size={24}
            color="#C4C4CC"
          />
        </TouchableOpacityAnimated>
      ) : (
        <Animated.View
          style={styles.progressContent}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Text style={styles.value}>{value.toFixed(0)}%</Text>

          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
