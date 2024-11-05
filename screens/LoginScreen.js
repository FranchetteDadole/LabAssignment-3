import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const handleLogin = (values) => {
    console.log('Login:', values);
    // Add your login logic here
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Image source={require('./avatar.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome Back</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isSubmitting }) => (
          <>
            <View style={styles.inputContainer}>
              <Icon name="mail" size={20} color="#007BFF" style={styles.icon} />
              <TextInput
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
                style={styles.input}
                autoCapitalize="none"
              />
            </View>
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <View style={styles.inputContainer}>
              <Icon name="lock-closed" size={20} color="#007BFF" style={styles.icon} />
              <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                value={values.password}
                style={styles.input}
              />
            </View>
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleSubmit} color="#007BFF" disabled={isSubmitting} />
              {isSubmitting && <ActivityIndicator size="small" color="#007BFF" />}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Don't have an account? Register</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F7F9FC',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 50, // Optional: adds a circular border effect if the logo is square
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    flex: 1,
    paddingHorizontal: 15,
    color: '#333', // Text color for better visibility
  },
  icon: {
    marginRight: 10,
  },
  link: {
    color: '#007BFF',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10, // Adds vertical margin for spacing
  },
});

export default LoginScreen;
