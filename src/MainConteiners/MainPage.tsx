import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function MainPage() {


    return (
        <Box sx={{
            height: '100%',
            display: "flex",
            justifyContent: "center", alignItems: "center", alignContent: "center", flexDirection: "column",
            paddingBottom: "32px"
        }}>

            <Typography variant="h2" sx={{ mt: 4, fontWeight: 'bold', textAlign: "center" }}>
                Hi. I'm Azat Iskakov
            </Typography>

            <Grid container spacing={5} sx={{ mt: 12, width: '90%' }}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "38px", color: "#00A6A0"  }}>
                        About me
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 4 }}>
                        Я разработчик на C# с опытом 1 год. Работаю над созданием и поддержкой приложений на .NET и .NET Framework, включая веб-приложения и сервисы.
                    </Typography>                    
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Основные технологии: .NET, React, TypeScript, GraphQL, PostgreSQL .
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Веду проекты "WOLWEB" для управления удалённым питанием компьютеров и "WEBCAM" приложение позволяющее смотреть через наши камеры через браузер.
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 6 }}>
                        Так же в мою деятельность входит системное администрирование где я занимаюсь монтажом и обслуживанием компьютерной техники. Устраняю ошибки и неполадки в операционной системе Windows. А так же занимаюсь поддержкой домена, MECM, Kaspersky, ADFS,  Autodesk и других корпоративных решений.
                    </Typography>
                </Grid>


                <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: "38px", color: "#00A6A0" }}>
                        Details
                    </Typography>

                    <Typography variant="h5" sx={{fontWeight: 'bold', mt: 4}}>
                        Возраст
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        24 года.
                    </Typography>

                    <Typography variant="h5" sx={{fontWeight: 'bold', mt: 4 }}>
                        Город проживания
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Планета Земля, Республика Казахстан, Город Усть-Каменогорск
                    </Typography>

                    <Typography variant="h5" sx={{fontWeight: 'bold', mt: 4 }}>
                        Цель
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                        Стать senior C# разработчиком
                    </Typography>

                </Grid>
            </Grid>


        </Box>
    )
}