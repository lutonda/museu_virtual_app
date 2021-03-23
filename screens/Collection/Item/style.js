import { StyleSheet } from "react-native"

export default StyleSheet.create({
    content: {
        height: '100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    text: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 5,
        textAlign: 'right',
    },
    default: {
        flex: 1,
        backgroundColor: 'transparent',
        color: 'transparent',
        padding: 5,
        textAlign: 'right',
    },
    value: {
        flex: 2,
        backgroundColor: '#eee',
        padding: 5,
        fontWeight: '900'
    }
})