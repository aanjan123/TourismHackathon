import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, ScrollView, Dimensions,TouchableNativeFeedback } from 'react-native';
import { Header } from '@components';
import { Button, Thumbnail, List, ListItem, Left, Right, Body, CardItem } from 'native-base';


export default class UserLists extends Component {
    loadList = () => {
        display = [];
        for (i = 0; i <= 11; i++) {
            display.push(<ListItem thumbnail>
                <Left>
                    <Thumbnail square source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABWVBMVEUvWnj////2k0Bh0+NRxtv/4Kj/6bgpO0d16fb0z5P/5LAmVXT/56z/4qn4lD8LSWz/8L3/lzsgUnIRS21k2ur3+foLTnZg0uJVdY3W3eJTzOG1wcstU3IQVnuPorH2jzl7kqQlP1Xl6u0nNECfr7urucRuh5vEztXJ0tnb4eZIa4VSc4vv8vTjjUdxip2Fmao6Yn78v37ZikslLjpgfZNYvc/8ypAzYG5x5fNLssh52ec3c46bdmDe9fjrkEPt1aLgyJsxR1hFVF+Z5+WKi37x4LPG5M1zamuem4dIl62Db2d5f3dkbmpbYmWJ6OyRcmTGhFL4oli76vJAe4j6sm1ATlnh0KhygonEupkgIjCT3+tUn6lFobjJ7POYmp5veH5CiqGr4NQrWGU3cH9GjJnAmHPnxpP5qmWte1vRh06ur527gFekeV5SYnKYnpXDtZCroITg4ryip5mzChjPAAASOElEQVR4nM2d61/TSBfHU0tKIU1beqFcWkq5CyhFLgoqN0FR6C6ygqC4uq77uK7ryj7//4tnJklzmcwkM3Mm+Pxe+MGWTztfzplzmZkkWippVReHZ6enlu6uDs23NVvt+aHVu0tT07PDi9XEv19L8LOrw6Njq1q5UC6VSoZhaH6h/6NX0Xva6tjocJKcSRHenh5vY7QgF00GBm2PT99OaCRJEA5PrZYKHGxBzkJpdWo4gdGoJlwcnSmVBek8ynJpZnRR8YiUEk5ML4jajmLLhekJlYNSR1iF4/kg1cUeVYRzM7K+SYcsz8wpGpkSwsUprawOz4Esa1NKpqQCwtvjhZJiPFulwriCFAImnBsqqDafJ6MwBHZWIOHsfIJ8NuP87A8knJtXPv0ojOV5kB0BhMNDN8BnMw4Bih1pwsWZhP0zwFiYkY6rsoRjN8hnM47dKOGslkx+iFJJkws5MoTIQW+cD0vOVSUIR28owIRllEdvgHBxtfyD+LDKq8JmFCWc/WEGtGWURWejIOH4j5mBfhXGEyScaN98CA2r1BbqkEUIR284B7JkFEQCjgDhEsBDDaMREuDPVVhKgLA6JOmhiM349uLRnydf7t3p6t6Xk69/v+ho0pilIe5lDl7CCU1qLEbDePbnnfzAwEA+JPTi1tcXbTlIQ+OdjJyEw1JJsGG8+ILZbrGEMe890qQgy5z9Bh/hqMQUNBrfvuYH2HQu5cDAyTMZRs54w0U4JQ5oNJ7d48DrQt55IcFYmFJFOCYO2Hh2h5vPZtySYOTqqDgIl4TnYOMbv/18duw0RL+ozJE14gnHRQGNxldhPpvxxBA1Yzm+hIslFAZsdLYGJPgsxlvCZoxHjCMUdtHGz1IG7JrxkTBinKPGEI4JA36VNaCtga/CiDHhJppQOE00TmCACPGLKGJM0ogkFE70cEApxMjUH0U4LAwIdFEHUdhRC1EFXAThhPAcfKQCECGKh5uIMpxNWBX8Fs3oqAFEiB3h8obdTLEJh4S/5ZZ8mggqf0v0q40hccIl0Ya3caIKECGeiPppiZkWWYTCYdR4pspHsQaeiXoQM6AyCCeE24nGljoTIiNuCVfhBUa0YRC2Rf+Exs8qTYiM+LPwCNoihOPCq04NpXxYwkYs0YtwKuGssI+qNqGMEbUCdcGfRrgovuykdhZiScxErUzbtqERrgr/9dQGUlvi4VQzVvkIRyVM+JU0YRNMKJ4TkREpKSNMKOGjWiMEuA4vcPISK4wUPw0Tzoh/cNhJm/2ZLagZJdxUM2biCcXjKNVJ+zOZl0DEvHAXpdHiaYhQ/ENpkbSZyWSKn2GIMtEUKY5wTGqHKRRJ8xmMuAxDHGjHf3NIJXLZhiBclNkjDE/D/MuihbjehMSbgRcyOzaFxUhCiTCDCEO9ff5zxlY/JN7k/5ZxUzLYBAmFV2YsUQLNskOIPVXajDIZUQut2gQJxft6i/BeOB1mXERd2oz5O1KERL8fIJyTOwxECaUeIZ6NeUlGuWCqleeYhPNyu+rhzqmpZwJazkv5qkxVg2TMswhnJc9zGaHRNzOk1l82xSEH5MajBc5N+QklTRhOh/mtYgixqC9vNQUpZQkDRvQRzkmflwkRvgoTYsj+9eWXt5qOnBMZSRBqhTkqoVwgpREGAg1BmdH1vvXl5VevPn/+/BLJ/pPYzMoI/eHUI7wtf+QpRKgzCTP9uq6brvptmehFZF8y5EoTaoXbFMJxaROSkcap2diEdJn9L/OqCI3xMKFURep8nIAJIwiR+xJGzEsPyVeduoRT8gcriXzYXI8wYSShuU4gymV8rNJUiFD6s8iaprkcBRhJqJvBfkuyprFFEkoWbDbhHR9hk54p+Aj1/lc+RMkW2JZbunUJpdqmLuEXjzAyysQT6v5ok78HIHSbKIewCjmA7++e8tF8sYS67rOhXPfkqFANEE5DDnA3/nQJI3I9J6FvKkotRbkqTQcIFyAnuH09frjkFrah6RIOPAKNasFPKL5dGPgsd50mdhZyEHozUW6dxpWzoajBnVTTvnUJvdULgA1dNx3ogEbluKkGd1JkRJcwdhpyELppX75os0e14BECKjZLOOVbrhVZr3ES+mo3SKDRupWbRTgKvBSmcTKQ38KMeDEfTIhDTf7WlsTxL0KlUZcQku6xBv/YKRaLyLuasYGGg7Afz2fUUf3nj0HYsOykbxHCTGjMn1tg602OUMpjw5f55jLqGM3c9jxsZKUuodzFFC7ggjN2RPhZlBA1wd2G2Hvts02I34CFQOuSDA3WOCGVDlxCr60oHlycn58fWEL/s+UjzNnCP24j7ezsfN/OdQlfNR1C3dRhQ5tyCMX37f2f8lfRR9gFPGq52sU629vr7B90Cc3t/c7e3hl+w/u91pFjRpQQu4R67i9ItLH29TEhyElLrv8hQicdFg93O4eHh/v7+0dHR8fHHYxzhlAPHMLtLnTn+Bj9Bvo99Nud1r5tRXPdIzRNkBHLNiFgCQr9mV67U09fX3eSRXH3rBjW4e5+0SLM7bcOc2Gd7Xb9dHm5rzspc68hDoYXpDRgyeY5qV+7x7RXW8cO4XHLiyuucse7ums5L+z8BRrdtEUov8iGNHhOQSnudiiEB60jh/CotU0h7OxSuM1zSFLES26IUGYv2SM8CKMgwj0K4Xnr0CE8bH0Pw+T2XC/1E26D0n4bE1ZBRSmdcI9CWLxoXdiE5vfWNY3wTD0havQ1YL4vUQAR4S6F8LCFPRoT7qBIEyY826MRwjIiyvkasOym27DTohAetdxs0TqiELY66m2Iim9N8nxJNOFxi2rYjENo7lLMZbaOEyAcQ4SgioYRS2mEGTvAYkIcNsmJaOp0wh0QIapqNMhiN1L5gkaIHDLkpnaysAn3W9tmgM5EjQTNdXXzAtgkpjTQSilyg/9S8gIKmx1UeR9kvIIGv3boEqJ0kUPtRLea0VHp/b1DSyG6eQhroMpVDbiC4avagka0ddY5PkJF5/XFxcWeFUrtebjT2vv+/fs1Kl2Pjjtn3cqbYkJg1YZXMjRYskCib2if26Pf83UPlgnt7il37es99qy/wvUODVDPAUdXHtZmgWs01FCTcXvCYubg4BxZ8Pr6PNAf7lxfIyvubG93W8VQ6LEFC6VoFs1qwKVSRulN4XV+cnr87ja3TgdzpyGo8MbDm9ZgDT4+FMBD6Cl+nSbgpMCVXNTma0vQe85Qc74qQqiTasaSdhdKWPpHyIhChLl/oDc1Mu5qsJIGazAxG5om1ISoqNGGoJ8haEQRQrgJNcQ3D/4MZsKAEgJrUlvzGqjDd9ROhNA0lYxNwWdYy97cjspNaJrf/j9uLWbJ0C68nK6CEBU5F3J3pkpMg8bCKhciF2Hu/YKhYA6qFl/A4SEENvaJiS9r8BDmgE1hYmorI1QTANVrkLaiIUFoXih1UoV/Lnq/L04I7esDaquoaVzxtBkcu9xK48y8grrUE0+siSdUUY16GlLQW/hEXeMXJARuihJCvQW4P/SLY0kjnhC0sU0K9YfgHj8oBYRKx4N6fOg6TVCDsUaMPV8KXXsKqjQFXmsjZABtaKo1IV5rg66Xkp9IW+UXIMz9V/F4ZuFr3oTicmI0odmvMsxo1po39OQlqVJMYRNNmDtS3BQWFqF7T2HFNFHRV5SATl7QVK5C9w8pmpe/Ziansoa0Bd4Dpig62EQRqg4zzh4wbB+fpkg/jSBUsnoYlLWPDz0CTVGUn0YQJuCj1lkM1elCi+4x2IS5ffV/a+s8DexMFF2DF0xEJmFObWdvyzoTBTvXxhB7KrIIk1lfa8PPJjIlSGjqSQzCOZuouPZ2PnuB4ad0QhO82UuVc74UdEaY/eGM6o1KaOZeJ7JC6pwRhp3zZoqBSCNMCrB7zlt9VWOLjkghRICKOwpH7ll9tW2+p9JrLkLTfJ/UAKaUXDMT9Q3zXITAa3/Ycq+ZAV73FKHBvtDFbGHCvsQ2mkrKrl1jatDsI69IJAn7+hIj9F27lkDxbWvQRAT9UYR9CRL6rj9UvZLhChEiBp1J2NeXJKHvGlLodcBMYUKMoVMJ+/oSJfRfB5xM4aY5hDZJP0nY15cwYeBabtj1+GzZhF0Yvb/fIewLKCHCwPX4SbmpQ0gQkUqGMHhPhaTcdNAM++RNERL3xVC+amrLI4xCTIaQuLdJQkl/0H/G+WYJyfvTgO4xxFaAkImYCGHoHkPql76xBolz6jfppSmSMJkW6mk84vrTJL6Ycq+vRCq3h9l/iUI7zHiefZjAN1Pu15bEklv9eTZ7QCISjNvZ7PO68m+m3XMviQWp+lU2m6UtzPgI0W9cqSek3jcRcO9LluobWQai7lkwm91QTki/9yXg/qUs2YThudiFXD+33l9TTsi4f6n8PWjpMuqFNYsg+xv16iZT/81+e61QV8vIuget9H2EKarX6+0PGz0Pso7IrIEBn3bfrKxdfWjXFVIy7yOsyIg2Xa1SSaddwuyDJ0//NS3DWf/++/SJ916lZ2RkpMeiVPH9EfeCVlG6IbwPVz2YDqlWyfqEkH568uS3J09+yj7wv44ILY2MrF091BRQRtzPGxpOkfGerzl0YUKs9MbGVZp80SG0IEc2nkNNGXVPdsn76nfxHl7VfHg0wreXKysrl29J7B6/LFNCICPvqy/dRCE8NPPShAjCB/dXerFW7ge9tNZDCM9KacjoZyPIVad0PKwA4drKZK+tyZU1/xsjJCEIMub5FuJnT4x6+4qOh+Xj+HTZ6+nyk+8dCqADKTEn455RItonosi5VmHypWsexu8rvX6t3I8ltCA3PogyhoDIF0SeFRRpPovQnXD3g4AI8aM7PdmEGBIbkn9IHM8K4g82aPZFmC9ImF4LEW6MhJIF05APeRl5nvfE+8yu+sO1GLy0F0zRDxuXQcBPKL7wEWJIXkauZ3ZxPXeNiy/dDaaVGvrpk9+Kk/dxAB1hhlJJRr7nrnHs69fbG1x8aTuYYkCEeH/Sh2iPOx0daAjG2PnI++y8WD+tP+fls4Lpg5rzc2AS2sN+EBdoAoxxyx3czz+Mjqf1hz3cgFaocf+zdumfhLa4pqGLuBZpRv5nWEY+h1TAgGkr1FRq3f9U3l76JqGtWrhmi2T8wEYUeQ5pxLNk63wRxtODmvdz5ZdJ3yS0xe+kNiJz2UrsWbLMDUVhwKAq9iQUgyIQWetWgs8DZjzTuX4FArTz/uQnrvwgiCj6TGfGc7kfwgAdL/0IIqSHVPHnclP7/foaCDBdsafhyhqIsGckDCjzbPVUVbkJ0xsrZLJQZsSqBGFqgkz89Q2gCZ1Q6s8WUgotIZcZUSaGMLxqAzRhxS1pYIA9I8TRdGJlhp+QCKj1D0BCr6a5AhIG8z4zjMYTpqb8iOA489Zdp/kF6KaBhFGYimSIJkyN+eZiHeqkv7vNBTBf9PT4CMvkwowYYWrJQ4RG0orXPYEnordtXGYmQk7C1HgXsX4FA/QvZKxcAfOFOxHL9HJbhNBFhE7D9FuPUNlEjAfkIOw6Knga/uLr8RVNxFgX5SNMjRWUTMOPPsJJIKFduBViggw3oZU0xDpfGqF/mQbWQTmhJiZNiBDi1A8t2dI9/uXEledAQlSaRid6QcLUcLlci4eI1EZgNfF3cKgpR5Vq4oSpCXBR+snvpQpCTUSxLUWYqm7CjBgIpchNgYQ1drskS5hKvQEhBheEoaHmDf+wBQhT72oAxkpvQLCq5lRg1CKEqcdpecRacPMJVNU8Fhm0ECHEU4ntNUCfL+ChEoTynrpBbCDuyhK+ExyxKKFsTK28JQglG6hN7hgqTZhKncqYkUiHssFUJMTIE6aqErORSIdywVTcgJKEaDYKB1UiHUqt7YvOQAihuKtWPvYShKLpQjCEggmxq4owEglfOF1IOSiMEOX/TRFG8rRJb68AYU0oxysjFGKsXYaMyM03IjcBVRCikMPLGDoxxL8DBeIDE3LbkULIlRA3gXwKCBEjT8whiza+hPgGMP8UEqK4epqOgySLNp6EeCodP/1SQoj0DhkyAjJUlsYmRLh7OlJFiA25yYYMlaXRi1E1NeazpI4wFQVJI2Sl/Nop7fCWtJQSpjAkdtcQZajw7mV0iJsKrWdLNSHWY8uUAUrf3qEnknDzVEHoDCkJQqzHp2/SNY+TRhhYUHyTCB1WUoSWEOZmujaCOAPbMvY0nLx0LIfgVHumX4kS2qo+fnd6+uv793tnZw7d2dne+/evfz19lyiao/8B/6gDPW87VrYAAAAASUVORK5CYII=' }} />
                </Left>
                <Body>
                    <Text>Sankhadeep</Text>
                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                </Body>
                <Right>
                    <Button transparent onPress={()=>this.props.navigation.navigate('Profile')}>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>);
        }
        return display;
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
                <Header Title="Available Guides" LeftIcon="ios-arrow-back" onPress={this.props.navigation}/>
                <ScrollView>
                    <List>
                        {this.loadList()}


                    </List>

                </ScrollView>

            </View >
        );
    }
}