import { Amount, ArrowRightIcon, Box, Button, Card, CardBody, Display, Heading, Link, ProgressBar, TabItem, TabList, TabPanel, Tabs, Text } from "@razorpay/blade/components";



const Index = () => {
  return (
    <Box maxWidth="1000px" margin="auto">
      <Box as="section" position="relative" height="400px">
        <Box position="absolute" bottom="spacing.0" right="spacing.0">
          <img src="/hero.png" loading="lazy" width="700px" />
        </Box>
        <Box display="flex" paddingTop="spacing.10" marginTop="50px" flexDirection="column" gap="spacing.6">
          <Display><Display color="surface.text.primary.normal" as="span">Advanced Payment Solutions</Display><br/>for India's finest disruptors</Display>
          <Heading weight="regular">100+ Payment Methods | Easy Integration | Powerful Dashboard</Heading>
          <Box>
            <Button icon={ArrowRightIcon} iconPosition="right" size="large" marginRight="spacing.6">Sign Up Now</Button> 
            <Link size="large" variant="button">Know More</Link>
          </Box>
        </Box>
      </Box>

      <Box as="section" position="relative" paddingTop="100px">
        <Display>The all in one <Display as="span" color="surface.text.onSea.onSubtle">Finance Platform</Display><br/> you've been looking for</Display>

        <Box paddingY="spacing.11">
          <Heading size="xlarge" marginBottom="spacing.6">Accept Payments</Heading>
          <Tabs variant="bordered" orientation="horizontal">
            <TabList>
              <TabItem value="subscriptions">Top Products</TabItem>
              <TabItem value="plans">On Website / App</TabItem>
              <TabItem value="settings">Plugins</TabItem>
            </TabList>

            <TabPanel value="subscriptions">
              <Box paddingTop="spacing.4" display="flex" gap="spacing.4">
                <Card>
                  <CardBody>
                    <Heading>Payment Gateway</Heading>
                    <Text>Offer a seamless experience</Text>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <Heading>Payment Links</Heading>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <Heading>Payment Pages</Heading>
                  </CardBody>
                </Card>
              </Box>
            </TabPanel>
            <TabPanel value="plans">
              <Box paddingTop="spacing.4">
                <Text>Plans Panel</Text>
              </Box>
            </TabPanel>
            <TabPanel value="settings">
              <Box paddingTop="spacing.4">
                <Text>Settings Panel</Text>
              </Box>
            </TabPanel>
          </Tabs>
        </Box>
      </Box>
    </Box>

  )
}

export default Index;