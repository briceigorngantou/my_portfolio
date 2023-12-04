/* eslint-disable object-curly-newline */
import {
  Alert,
  Grid,
  InputAdornment,
  Modal,
  Typography,
  useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Phone } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailIcon from '@mui/icons-material/Email';
import { address, email, phoneNumber } from '../../constants/data';
import Title from '../../components/title/Title';
import { sendEmail } from '../../api/sendEmail.api';
import Loading from '../../components/loading/Loading';
import TextInput from '../../components/forms/TextInput';
import PrimaryButton from '../../components/forms/PrimaryButton';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('fullName is required'),
  email: Yup.string().email().required('email is required'),
  phone: Yup.string(),
  message: Yup.string().required('Message is required')
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 25,
  p: 4,
  borderRadius: 5,
  backgroundColor: '#3AB37C'
};

export default function ContactUs() {
  const theme = useTheme();
  const { main, light } = theme.palette.primary;
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [errorServer, setErrorServer] = useState(false);

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setEmailSent(false);
  };
  const submitForm = async (values: any) => {
    if (values?.fullName && values?.phone && values?.email && values?.message) {
      await sendEmail(
        values?.fullName,
        values?.email,
        values?.phone,
        values?.message
      )
        .then(async (res: any) => {
          if (res) {
            setLoading(false);
            if (res?.data?.data?.data?.sendEmail) {
              setErrorServer(false);
              setInputError(false);
              setEmailSent(true);
              setTimeout(() => {
                navigate('/');
              }, 3000);
            } else {
              setInputError(false);
              setEmailSent(false);
              setErrorServer(true);
            }
          } else {
            setLoading(true);
          }
        })
        .catch(
          (err: any) => err
          // console.log('Error: ', err);
        );
    } else {
      setInputError(true);
      setErrorServer(false);
    }
  };

  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 5000);
    }
  }, [emailSent]);

  return (
    <Grid
      container
      marginTop={3}
      marginBottom={2}
      sx={{ width: '100%', justifyContent: 'center' }}
    >
      <Grid item sx={{ marginBottom: 1, marginTop: 1 }}>
        {loading && <Loading isLoading={loading} loadingMsg={'Loading...'} />}
      </Grid>
      <Grid
        sx={{ px: { xs: 2, md: 5 }, pb: { xs: 2, md: 3 } }}
        container
        p={2}
        marginTop={10}
        justifyContent="center"
      >
        <Title title="CONTACTS" />
      </Grid>
      {/*  START */}
      <Grid
        container
        xs={12}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        sx={{ width: '100%' }}
      >
        <Grid item xs={6} sm={4} md={4} sx={{ margin: 2 }}>
          <Grid
            sx={{
              textAlign: 'left',
              width: '100%',
              marginTop: '15%'
            }}
          >
            <Grid item container direction="row" xs={12}>
              {inputError && (
                <Alert severity="error" sx={{ width: '100%' }}>
                  Please enter all required information.
                </Alert>
              )}
            </Grid>{' '}
            <Grid item container direction="row" xs={12}>
              {errorServer && (
                <Alert severity="error" sx={{ width: '100%' }}>
                  Sorry, an error occurred while processing your request. Please
                  try again.
                </Alert>
              )}
            </Grid>
            <Formik
              initialValues={{
                email: '',
                fullName: '',
                phone: '',
                message: ''
              }}
              validationSchema={validationSchema}
              onSubmit={async (values) => {
                setLoading(true);
                // console.log(values);
                await submitForm(values);
              }}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <Grid>
                  <Grid item xs={12} sx={{ margin: 2 }}>
                    <TextInput
                      variant="standard"
                      required
                      // label="FULLNAME"
                      placeholder="FULLNAME"
                      value={values.fullName}
                      fullWidth
                      name="fullName"
                      type="text"
                      error={
                        errors.fullName && touched.fullName
                          ? errors.fullName
                          : ''
                      }
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ marginRight: 1 }}
                          >
                            <PermIdentityIcon />
                          </InputAdornment>
                        )
                      }}
                      onChange={handleChange('fullName')}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: 2 }}>
                    <TextInput
                      required
                      variant="standard"
                      // label="EMAIL"
                      placeholder="EMAIL"
                      value={values.email}
                      fullWidth
                      name="email"
                      type="text"
                      error={errors.email && touched.email ? errors.email : ''}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ marginRight: 1 }}
                          >
                            <EmailIcon />
                          </InputAdornment>
                        )
                      }}
                      onChange={handleChange('email')}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: 2 }}>
                    <TextInput
                      // label="PHONE"
                      variant="standard"
                      placeholder="PHONE"
                      value={values.phone}
                      type="tel"
                      required={false}
                      name="phone"
                      error={errors.phone && touched.phone ? errors.phone : ''}
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ marginRight: 1 }}
                          >
                            <Phone />
                          </InputAdornment>
                        )
                      }}
                      onChange={handleChange('phone')}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ margin: 2 }}>
                    <TextInput
                      rows={5}
                      variant="standard"
                      multiline={true}
                      // label={'MESSAGE'}
                      type={'text'}
                      placeholder="MESSAGE"
                      fullWidth={true}
                      onChange={handleChange('message')}
                      value={values.message}
                      name={'message'}
                      required={true}
                      error={
                        errors.message && touched.message ? errors.message : ''
                      }
                    />
                  </Grid>
                  <Grid
                    xs={12}
                    sx={{
                      justifyContent: 'left',
                      margin: 2,
                      marginBottom: 5,
                      marginTop: 2
                    }}
                  >
                    <PrimaryButton
                      title="Send message"
                      variant="outlined"
                      fontSize={16}
                      fontWeight={200}
                      onPress={handleSubmit}
                      // disabled={
                      //   !values.email || !values.fullName || !values.message
                      // }
                      style={{
                        width: '100%',
                        height: 40,
                        borderRadius: 1,
                        borderColor: main,
                        borderWidth: 0.1,
                        color: light,
                        backgroundColor: theme.palette.secondary.dark,
                        ':hover': {
                          color: theme.palette.secondary.dark,
                          backgroundColor: light
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              )}
            </Formik>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={4} md={4} sx={{ margin: 2 }}>
          <Grid
            sx={{
              textAlign: 'left',
              width: '100%',
              marginTop: '15%'
            }}
          >
            <Typography
              fontSize={16}
              fontWeight={400}
              color={theme.palette.secondary.main}
            >
              RESTEZ EN CONTACT AVEC MOI
            </Typography>
            <Typography
              gutterBottom
              textAlign={'left'}
              variant="h4"
              fontWeight={500}
              color={main}
            >
              Contact rapide
            </Typography>
            <br />
            <Typography
              fontSize={18}
              fontWeight={'bold'}
              color={theme.palette.secondary.main}
            >
              Juste pour dire bonjour !
            </Typography>
            <br />
            <Typography
              fontSize={16}
              fontWeight={500}
              color={theme.palette.secondary.main}
            >
              Vous avez besoin d’un stagiaire ou d&apos;un alternant pour un de
              vos projets ?
            </Typography>
            <br />
            <Typography
              fontSize={16}
              fontWeight={400}
              color={theme.palette.secondary.main}
            >
              Vous avez besoin d’une application web ou mobile qui vous
              permettra de faire augmenter votre chiffre d’affaire ?
            </Typography>
            <br />
            <Typography
              fontSize={16}
              fontWeight={400}
              color={theme.palette.secondary.main}
            >
              Utilisez simplement les coordonnées suivantes.
            </Typography>
            <br />
          </Grid>
          <Grid
            sx={{
              textAlign: 'left',
              width: '100%',
              marginBottom: '20%'
            }}
          >
            <Typography
              fontSize={16}
              fontWeight={400}
              color={theme.palette.secondary.main}
            >
              <strong>ADDRESS: </strong>
              {address}
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={400}
              color={theme.palette.secondary.main}
            >
              <strong>EMAIL: </strong>
              {email}
            </Typography>

            <Typography
              fontSize={16}
              fontWeight={400}
              color={theme.palette.secondary.main}
            >
              <strong>PHONE NUMBER: </strong>
              {phoneNumber}
            </Typography>
          </Grid>
        </Grid>
        {emailSent && (
          <Modal
            open={emailSent}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Grid
              container
              sx={modalStyle}
              textAlign="center"
              justifyContent={'center'}
              direction="column"
            >
              <Alert
                severity="success"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  letterSpacing: 0.5
                }}
              >
                Your message has been sent successfully
              </Alert>
            </Grid>
          </Modal>
        )}
      </Grid>
    </Grid>
  );
}
