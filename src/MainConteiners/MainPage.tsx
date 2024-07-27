import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import backgroundImg from '../Pictures/BackgroundMainPaper.png';
import { Box } from "@mui/material";

export default function MainPage() {


    return (
        <Paper elevation={3} sx={{
            minHeight: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            overflow: 'hidden'
        }}>

            <Typography variant="h2" sx={{ mt: 12, fontWeight: 'bold', textAlign: "center" }}>
                Hi. I'm Azat Iskakov
            </Typography>

            <Grid container spacing={5} sx={{ mt: 6, width: '90%', paddingBottom: "54px" }}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "38px", color: "#00A6A0" }}>
                        About me
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 4 }}>
                        Я разработчик на C#. Занимаюсь созданием и поддержкой приложений на платформе .NET и .NET Framework, включая веб-приложения и сервисы.
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Основные технологии: .NET, React, TypeScript, GraphQL, PostgreSQL .
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Создал с нуля проекты "WOLWEB" (управление удалённым питанием компьютеров и сбор аппаратной информации) и "WEBCAM" (приложение для просмотра Live с IP камеры через браузер).
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 6 }}>
                        Также в мои обязанности входит системное администрирование, где я Занимаюсь: монтажом и обслуживанием компьютерной техники, устранение ошибок и неполадок в операционной системе Windows, поддержка домена и серверов лицензий, MECM (бывший SCCM), Kaspersky, ADFS, Autodesk и других корпоративных решений.
                    </Typography>
                </Grid>


                <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "38px", color: "#00A6A0" }}>
                        Details
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
                        Возраст
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        24 года.
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
                        Город проживания
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Планета Земля, Республика Казахстан, Город Усть-Каменогорск
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
                        Цель
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Стать senior C# разработчиком
                    </Typography>

                </Grid>



            </Grid>


            <Box sx={{
                overflow: "hidden",
                width: '100%',
                position: 'relative',
                minHeight: "100px",
                flex: 1
            }}>
                <img
                    src={backgroundImg}
                    alt="background"
                    style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '100vh',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        borderRadius: "5px"
                    }}
                />
            </Box>

        </Paper >
    )
}