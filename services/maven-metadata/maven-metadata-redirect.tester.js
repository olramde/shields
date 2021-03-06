'use strict'

const t = (module.exports = require('../tester').createServiceTester())

t.create('maven metadata (badge extension)')
  .get(
    '/http/central.maven.org/maven2/com/google/code/gson/gson/maven-metadata.xml.json',
    {
      followRedirect: false,
    }
  )
  .expectStatus(301)
  .expectHeader(
    'Location',
    `/maven-metadata/v.json?metadataUrl=${encodeURIComponent(
      'http://central.maven.org/maven2/com/google/code/gson/gson/maven-metadata.xml'
    )}`
  )

t.create('maven metadata (no badge extension)')
  .get(
    '/http/central.maven.org/maven2/com/google/code/gson/gson/maven-metadata.xml',
    {
      followRedirect: false,
    }
  )
  .expectStatus(301)
  .expectHeader(
    'Location',
    `/maven-metadata/v.svg?metadataUrl=${encodeURIComponent(
      'http://central.maven.org/maven2/com/google/code/gson/gson/maven-metadata.xml'
    )}`
  )
