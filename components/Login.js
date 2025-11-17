import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";


    function Login() {
        return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            
                    <Image source={require('../assets/adaptive-icon.png')} style={styles.size} />
                </View>
                <Text style={styles.title}>Login components</Text>

                <Text style={styles.label}>Correo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType="email-address"/>

                    <Text style={{...styles.label, marginTop: 20}}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    keyboardType="numeric"/>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.Button}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Iniciar Sesión</Text>
                    </TouchableOpacity>
            </View>

        <View styles={styles.footer}>
        <Text style={[styles.footerText, {fontSize: 16}]}>¿No tienes una cuenta?</Text>
        <Button  onPress={ ()=> {}} title="Regístrate" color="#007bff" />
    </View>
    </View>
    
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        imageContainer: { alignItems: 'center', marginVertical: 10},
        size: { height: 200, width: 200, borderWidth: 1, borderRadius: 20,},
        title: {
            fontSize: 24,
            fontWeight: '600',
            marginBottom: 16,
            textAlign: 'center',
        },
        label: {
            marginVertical: 8,
        },
        input: {
            width: '100%',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 20,
            paddingVertical: 15,
            fontSize: 18,
            backgroundColor: '#f0f0f0',
        },
        buttonContainer: {
            marginTop: 20,
            width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
        },
        Button: {
            height: 45,
            backgroundColor: '#007bff',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
        },
        footer: {
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerText: { 
            marginRight: 6,
        },
    });
