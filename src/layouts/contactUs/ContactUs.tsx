/* eslint-disable object-curly-newline */
import {
  Alert,
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Phone } from '@mui/icons-material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import {
  address,
  email,
  github,
  linkedin,
  phoneNumber
} from '../../constants/data';
import Title from '../../components/title/Title';
import Loading from '../../components/loading/Loading';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Nom requis'),
  email: Yup.string().email('Email invalide').required('Email requis'),
  phone: Yup.string(),
  message: Yup.string().required('Message requis')
});

export default function ContactUs() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const { main } = theme.palette.primary;
  const accent = theme.palette.secondary.light;
  const formRef = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const submitForm = async (
    values: { fullName: string; email: string; phone: string; message: string },
    resetForm: () => void
  ) => {
    setLoading(true);
    setSendError(false);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.fullName,
          from_email: values.email,
          phone: values.phone || 'Non renseigné',
          message: values.message
        },
        PUBLIC_KEY
      );
      setEmailSent(true);
      resetForm();
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (emailSent) {
      t = setTimeout(() => setEmailSent(false), 5000);
    }
    return () => clearTimeout(t);
  }, [emailSent]);

  const inputSx = {
    '& .MuiInputBase-root': {
      borderRadius: 2,
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      color: main,
      background: isLight ? 'rgba(79,142,247,0.04)' : 'rgba(255,255,255,0.03)',
      '&:hover fieldset': { borderColor: accent },
      '&.Mui-focused fieldset': { borderColor: accent }
    },
    '& .MuiInputLabel-root': {
      fontFamily: 'Inter, sans-serif',
      fontSize: 14,
      color: isLight ? 'rgba(30,41,59,0.55)' : 'rgba(226,232,246,0.55)',
      '&.Mui-focused': { color: accent }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: isLight ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.08)'
    }
  };

  const contactInfo = [
    { icon: <LocationOnOutlinedIcon fontSize="small" />, label: address },
    {
      icon: <EmailIcon fontSize="small" />,
      label: email,
      href: `mailto:${email}`
    },
    {
      icon: <PhoneOutlinedIcon fontSize="small" />,
      label: phoneNumber,
      href: `tel:${phoneNumber}`
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: isLight
          ? 'linear-gradient(180deg, #EEF2FF 0%, #F8FAFF 100%)'
          : 'linear-gradient(180deg, #0B0F1A 0%, #0E1626 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Title title="PRENONS CONTACT" />
          <Typography
            sx={{
              mt: 2,
              fontSize: 15,
              color: main,
              opacity: 0.65,
              maxWidth: 480,
              mx: 'auto',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.7
            }}
          >
            Un projet, une opportunité ou juste un bonjour ?<br />
            Je lis tous mes messages et réponds sous 24h.
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="flex-start">
          {/* Left: info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: main,
                  fontFamily: 'Inter, sans-serif',
                  mb: 1
                }}
              >
                Discutons ensemble
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: main,
                  opacity: 0.65,
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.8
                }}
              >
                Développeur Full Stack disponible pour vos projets web &amp;
                mobile, collaborations techniques ou opportunités
                professionnelles.
              </Typography>
            </Box>

            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}
            >
              {contactInfo.map((item, i) => (
                <Box
                  key={i}
                  component={item.href ? 'a' : 'div'}
                  href={item.href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    textDecoration: 'none',
                    color: main,
                    opacity: 0.75,
                    '&:hover': { opacity: 1, color: accent },
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 2,
                      background: isLight
                        ? 'rgba(79,142,247,0.08)'
                        : 'rgba(237,185,111,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accent,
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: main,
                opacity: 0.45,
                fontFamily: 'Inter, sans-serif',
                mb: 1.5
              }}
            >
              Retrouvez-moi sur
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: isLight ? '#fff' : '#1A2234',
                  border: `1px solid ${
                    isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)'
                  }`,
                  color: main,
                  '&:hover': {
                    color: '#0A66C2',
                    background: 'rgba(10,102,194,0.1)',
                    borderColor: '#0A66C230'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: isLight ? '#fff' : '#1A2234',
                  border: `1px solid ${
                    isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)'
                  }`,
                  color: main,
                  '&:hover': {
                    color: isLight ? '#24292F' : '#fff',
                    background: isLight
                      ? 'rgba(36,41,47,0.08)'
                      : 'rgba(255,255,255,0.08)',
                    borderColor: isLight
                      ? '#24292F30'
                      : 'rgba(255,255,255,0.15)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Right: form */}
          <Grid item xs={12} md={8}>
            <Box
              ref={formRef}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                background: isLight ? '#FFFFFF' : '#1A2234',
                border: `1px solid ${
                  isLight ? 'rgba(79,142,247,0.10)' : 'rgba(255,255,255,0.05)'
                }`,
                boxShadow: isLight
                  ? '0 4px 30px rgba(0,0,0,0.06)'
                  : '0 4px 30px rgba(0,0,0,0.30)'
              }}
            >
              {loading && (
                <Loading isLoading={loading} loadingMsg="Envoi en cours..." />
              )}
              {sendError && (
                <Alert
                  severity="error"
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onClose={() => setSendError(false)}
                >
                  Erreur lors de l&apos;envoi. Veuillez réessayer ou me
                  contacter directement par email.
                </Alert>
              )}

              <Formik
                initialValues={{
                  email: '',
                  fullName: '',
                  phone: '',
                  message: ''
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  await submitForm(values, resetForm);
                }}
              >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                  <Box
                    component="form"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Nom complet *"
                          value={values.fullName}
                          onChange={handleChange('fullName')}
                          error={!!(errors.fullName && touched.fullName)}
                          helperText={
                            errors.fullName && touched.fullName
                              ? errors.fullName
                              : ''
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <PermIdentityIcon
                                  fontSize="small"
                                  sx={{ color: accent, opacity: 0.7 }}
                                />
                              </InputAdornment>
                            )
                          }}
                          sx={inputSx}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email *"
                          value={values.email}
                          onChange={handleChange('email')}
                          error={!!(errors.email && touched.email)}
                          helperText={
                            errors.email && touched.email ? errors.email : ''
                          }
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon
                                  fontSize="small"
                                  sx={{ color: accent, opacity: 0.7 }}
                                />
                              </InputAdornment>
                            )
                          }}
                          sx={inputSx}
                        />
                      </Grid>
                    </Grid>

                    <TextField
                      fullWidth
                      label="Téléphone"
                      value={values.phone}
                      onChange={handleChange('phone')}
                      type="tel"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone
                              fontSize="small"
                              sx={{ color: accent, opacity: 0.7 }}
                            />
                          </InputAdornment>
                        )
                      }}
                      sx={inputSx}
                    />

                    <TextField
                      fullWidth
                      multiline
                      rows={5}
                      label="Votre message *"
                      value={values.message}
                      onChange={handleChange('message')}
                      error={!!(errors.message && touched.message)}
                      helperText={
                        errors.message && touched.message ? errors.message : ''
                      }
                      sx={inputSx}
                    />

                    <Box
                      onClick={() => handleSubmit()}
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        px: 4,
                        py: 1.6,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #4F8EF7, #8B5CF6)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: 14,
                        fontFamily: 'Inter, sans-serif',
                        cursor: 'pointer',
                        boxShadow: '0 6px 24px rgba(79,142,247,0.35)',
                        alignSelf: 'flex-start',
                        '&:hover': {
                          background:
                            'linear-gradient(135deg, #3B7FEF, #7C3AED)',
                          boxShadow: '0 10px 30px rgba(79,142,247,0.45)',
                          transform: 'translateY(-1px)'
                        },
                        transition: 'all 0.22s ease'
                      }}
                    >
                      <SendIcon sx={{ fontSize: 16 }} />
                      Envoyer le message
                    </Box>
                  </Box>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Modal open={emailSent} onClose={() => setEmailSent(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: 300, sm: 420 },
            background: isLight ? '#FFFFFF' : '#1A2234',
            borderRadius: 4,
            p: 4,
            textAlign: 'center',
            boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
            border: `1px solid ${
              isLight ? 'rgba(34,197,94,0.20)' : 'rgba(34,197,94,0.15)'
            }`
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'rgba(34,197,94,0.12)',
              border: '1px solid rgba(34,197,94,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2,
              fontSize: 28
            }}
          >
            ✓
          </Box>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              color: '#16A34A',
              fontFamily: 'Inter, sans-serif',
              mb: 1
            }}
          >
            Message envoyé !
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: main,
              opacity: 0.7,
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Merci pour votre message. Je vous répondrai dans les plus brefs
            délais.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
