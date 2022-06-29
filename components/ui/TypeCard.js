import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import CardFrame from "../box/CardFrame";
import colors from "../../constants/colors";
import typeImages from "../../constants/type-images";

export default function TypeCard({ type }) {
  const pressEffect = ({ pressed }) => {
    return {
      opacity: pressed ? 0.5 : 1,
    };
  };

  return (
    <View style={[styles.container]}>
      <CardFrame bgColor={colors[type.name]}>
        <View style={styles.flex_container}>
          <Pressable
            android_ripple={{ color: colors[type.name] }}
            style={pressEffect}
          >
            <View style={styles.img_container}>
              <Image source={typeImages[type.name]} style={styles.img}></Image>
            </View>
          </Pressable>
          <View style={styles.text_container}>
            <View>
              <Text style={styles.txt}>{type.name.toUpperCase()}</Text>
            </View>
            <View>

              {/* double damage */}
              <View>
                <Text style={[styles.damage_text, {color: colors[type.name]}]}>Double Damage From</Text>
                <ScrollView horizontal={true}>
                  {type.damage_relations &&
                  type.damage_relations.double_damage_from.length > 0 ? (
                    type.damage_relations.double_damage_from.map((x, i) => (
                      <View
                        key={i}
                        style={{ borderRadius: 15, overflow: "hidden" }}
                      >
                        <Image
                          source={typeImages[x.name]}
                          style={styles.damage_image}
                        />
                      </View>
                    ))
                  ) : (
                    <Text>-</Text>
                  )}
                </ScrollView>
              </View>
              <View>
                <Text style={[styles.damage_text, {color: colors[type.name]}]}>Double Damage To</Text>
                <ScrollView horizontal={true}>
                  {type.damage_relations &&
                  type.damage_relations.double_damage_to.length > 0 ? (
                    type.damage_relations.double_damage_to.map((x, i) => (
                      <View
                        key={i}
                        style={{ borderRadius: 15, overflow: "hidden" }}
                      >
                        <Image
                          source={typeImages[x.name]}
                          style={styles.damage_image}
                        />
                      </View>
                    ))
                  ) : (
                    <Text>-</Text>
                  )}
                </ScrollView>
              </View>

              {/* half damage */}
              <View>
                <Text style={[styles.damage_text, {color: colors[type.name]}]}>Half Damage From</Text>
                <View>
                  <ScrollView horizontal={true}>
                    {type.damage_relations &&
                    type.damage_relations.half_damage_from.length > 0 ? (
                      type.damage_relations.half_damage_from.map((x, i) => (
                        <View
                          key={i}
                          style={{ borderRadius: 15, overflow: "hidden" }}
                        >
                          <Image
                            source={typeImages[x.name]}
                            style={styles.damage_image}
                          />
                        </View>
                      ))
                    ) : (
                      <Text>-</Text>
                    )}
                  </ScrollView>
                </View>
              </View>
              <View>
                <Text style={[styles.damage_text, {color: colors[type.name]}]}>Half Damage To</Text>
                <ScrollView horizontal={true}>
                  {type.damage_relations &&
                  type.damage_relations.half_damage_to.length > 0 ? (
                    type.damage_relations.half_damage_to.map((x, i) => (
                      <View
                        key={i}
                        style={{ borderRadius: 15, overflow: "hidden" }}
                      >
                        <Image
                          source={typeImages[x.name]}
                          style={styles.damage_image}
                        />
                      </View>
                    ))
                  ) : (
                    <Text>-</Text>
                  )}
                </ScrollView>
              </View>
              
              {/* no damage */}
              <View>
                <Text style={[styles.damage_text, {color: colors[type.name]}]}>No Damage From</Text>
                <ScrollView horizontal={true}>
                  {type.damage_relations &&
                  type.damage_relations.no_damage_from.length > 0 ? (
                    type.damage_relations.no_damage_from.map((x, i) => (
                      <View
                        key={i}
                        style={{ borderRadius: 15, overflow: "hidden" }}
                      >
                        <Image
                          source={typeImages[x.name]}
                          style={styles.damage_image}
                        />
                      </View>
                    ))
                  ) : (
                    <Text>-</Text>
                  )}
                </ScrollView>
              </View>
              <View>
                <Text style={[styles.damage_text, {color: colors[type.name]}]}>No Damage To</Text>
                <ScrollView horizontal={true}>
                  {type.damage_relations &&
                  type.damage_relations.no_damage_to.length > 0 ? (
                    type.damage_relations.no_damage_to.map((x, i) => (
                      <View
                        key={i}
                        style={{ borderRadius: 15, overflow: "hidden" }}
                      >
                        <Image
                          source={typeImages[x.name]}
                          style={styles.damage_image}
                        />
                      </View>
                    ))
                  ) : (
                    <Text>-</Text>
                  )}
                </ScrollView>
              </View>

            </View>
          </View>
        </View>
      </CardFrame>
    </View>
  );
}

const styles = StyleSheet.create({
  flex_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  img_container: {
    height: 100,
    width: 100,
    overflow: "hidden",
    marginRight: 20,
    borderRadius: 50,
  },
  text_container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(256,256,256,0.8)",
    borderRadius: 5,
    flex: 1,
  },
  img: {
    height: "100%",
    aspectRatio: 1,
  },
  txt: {
    fontFamily: "pasifico",
    fontSize: 22,
    textDecorationLine: 'underline',
    color: colors.primary
  },
  subcontainer: {
    overflow: "hidden",
  },
  container: {
    margin: 10,
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    flex: 1,
    flexDirection: "column",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  damage_text: {
    fontFamily: 'incon',
  },
  damage_image: {
    height: 30, 
    aspectRatio: 1
  }
});
