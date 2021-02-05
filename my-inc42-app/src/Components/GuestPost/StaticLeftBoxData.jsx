import { Box, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'

export default function StaticLeftBoxData() {
    return (
        <div>
            <Grid>
                <Grid item>
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" mb={2}>
                        Types Of Guest Posts We Accept
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        1. An article which has insights about a particular domain/industry in the startup ecosystem.</Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        2. The article can be in the form of advice for entrepreneurs, investors or innovators.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        3. We also accept listicles, but they should not be promotional for a specific brand/company or promoting the author’s brand/company in any form.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        4. Learnings from a personal entrepreneurial journey, investors with a value add a factor for founders and investors respectively.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={3}>
                        5. Articles about a specific sector update/forecast – example – change in policy, the introduction of the new tax regime, any impending merger/acquisition or controversial issues that require a conversation.
                    </Box>
                </Grid>
                <Grid item>
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" mb={2}>
                        Guest Post Submission Guidelines
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        1. Ensure that the article is not in the form of a press release or meant for mass consumption or promotions. An article shouldn’t be promoting any particular brand or the brands associated with the author directly or indirectly.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        2. Articles must be shared in .docx format only.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        3. Make sure the content is original, wherever necessary, please add proper references and linkbacks.The article should be more than 500 words.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        4. The article should not contain more than 2 link backs (One should be in Author Bio)
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        5. A relevant Image (1000×700) should also be shared with the docs. file.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        6. Please use pointers and subheads wherever applicable.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                        7. Content should be backed by data wherever necessary.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={3}>
                        8. Should not be plagiarised, in case we find the content is plagiarised, we will block the author immediately and will not be covering anything related to the author, the brand or company in future.
                    </Box>
                    <Box fontWeight={500} textAlign="textAlignStart" lineHeight={1.5} mb={1}>
                    For complete guest post guidelines, Check the <Link color="secondary">Complete Editorial Policy for Guest Post.</Link>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
