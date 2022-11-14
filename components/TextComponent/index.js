import { Text, StyleSheet, View } from 'react-native';

export default function TextComponent(props) {
    let textStyleSet = [];
    let viewStyleSet = [{
        paddingVertical: 7,
        paddingHorizontal: 15,
    }];
    let viewTextStyleSet = [{

    }];
    if (props.title) {
        textStyleSet.push(styles.textTitle);
    }
    if (props.subTitle) {
        textStyleSet.push(styles.textSubTitle);
    }
    if (props.description) {
        textStyleSet.push(styles.textDescription);
    }
    if (props.color) {
        textStyleSet.push({ color: props.color });
    }
    if (props.bold) {
        textStyleSet.push({ fontWeight: 'bold' });
    }
    if (props.separator) {
        viewStyleSet.push({
            // borderWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: "#000"
        });
    }
    if (props.sublime) {
        viewTextStyleSet.push({
            // borderWidth: 1,
            borderBottomWidth: 1,
            borderBottomColor: "#000"
        });
    }
    return (
        <View style={viewStyleSet} >
            <View style={viewTextStyleSet} >
                <Text textalign='center' style={textStyleSet}>
                    {props.children}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    stylesBar: {
        backgroundColor: 'red',
        paddingHorizontal: 24,
        paddingVertical: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionContainer: {
        flex: 1,
        marginTop: 32,
        // paddingHorizontal: 24,
        borderWidth: 5,
        borderColor: 'greem',
    },
    textTitle: {
        fontSize: 24,
    },
    textSubTitle: {
        fontSize: 18,
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textDescription: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
        borderWidth: 1,
        borderColor: 'blue',
    },
});