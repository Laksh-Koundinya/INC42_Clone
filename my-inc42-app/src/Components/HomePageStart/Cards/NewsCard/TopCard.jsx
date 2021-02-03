import React from 'react'
import {
    CardContent,
    Typography,
    Avatar,
    CardHeader
} from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


import styles from "../Card.module.css";
import { Date } from "../Date";
export const TopCard = ({classes,data}) => {
    return (
        <>
          <CardContent>
                <Typography className={classes.category}>
                    {" "}
                    {data.category}{" "}
                </Typography>
                <Typography variant="h4" className={classes.title}>
                    {" "}
                    {data.title}{" "}
                </Typography>

                {/* <Avatar src = "https://secure.gravatar.com/avatar/ed9e7e664051a76f4cc70b0d9b77f0ea?s=60&d=mm&r=g" alt = "anusha" /> */}
            </CardContent>

            <div className={classes.socialMediaIconsContainer}>
                <div className={styles.cardBottom}>
                    
                    <CardHeader
                        avatar={
                            <Avatar
                                alt={data.author}
                                src={data.author_image}
                                aria-label="recipe"
                                className={classes.avatar}
                            />
                        }
                    />
                    
                    <div>
                        <span className={styles.author}>{data.author}</span>
                        {/* three elements with full stop */}
                        <Date
                            published={data.published_at}
                            timeTakenToRead={data.time_taken_read}
                        />
                    </div>        
                   
                </div>
                <div style = {{flexGrow:1}}></div>
                <div className={classes.icons}>
                   
                    <Typography>share story</Typography>
                    <div className = {classes.allIcons}>
                        <Avatar className={classes.whatsAppIcon}>
                            <WhatsAppIcon className={classes.iconColor} />
                        </Avatar>
                        <Avatar className={classes.facebookIcon}>
                            <FacebookIcon className={classes.iconColor} />
                        </Avatar>
                        <Avatar className={classes.twitterIcon}>
                            <TwitterIcon className={classes.iconColor} />
                        </Avatar>
                        <Avatar className={classes.linkedInIcon}>
                            <LinkedInIcon className={classes.iconColor} />
                        </Avatar>
                    </div>
                    
                    
                </div>
            </div>  
        </>
    )
}
