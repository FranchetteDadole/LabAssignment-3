import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordRecoveryScreen = () => {
  const handleRecovery = (values) => {
    console.log('Password Recovery:', values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={handleRecovery}
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
            <Button title="Recover Password" onPress={handleSubmit} color="#007BFF" disabled={isSubmitting} />
            {isSubmitting && <ActivityIndicator size="small" color="#007BFF" />}
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
  },
  icon: {
    marginRight: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default PasswordRecoveryScreen;
