import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '~/layout/ProTip'
import Link from '~/layout/Link'
import Copyright from '~/layout/Copyright'

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          this is about page
        </Typography>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}