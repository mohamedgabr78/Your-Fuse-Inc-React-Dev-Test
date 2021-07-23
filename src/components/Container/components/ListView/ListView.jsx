import styles from "./ListView.module.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useSelector } from "react-redux";
import { renderStaticText } from "../../../../locale";
import { formatPrice } from "../../../../utils";

export default function ListView() {
  const { coins, firstItem, currentPage, limit } = useSelector((state) => ({
    coins: state.coinListReducer.coins || [],
    firstItem: state.coinListReducer?.pagination?.firstItem,
    currentPage: state.coinListReducer?.pagination?.currentPage,
    limit: state.coinListReducer?.pagination?.limit,
  }));

  return (
    <div className={styles.container}>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> {renderStaticText("coinTitle")}</TableCell>
              <TableCell align="center">
                {renderStaticText("coinPrice")}
              </TableCell>
              <TableCell align="center">{renderStaticText("volume")}</TableCell>
              <TableCell align="center">
                {renderStaticText("marketRate")}
              </TableCell>
              <TableCell align="center">{renderStaticText("rank")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...coins]
              .slice(firstItem, currentPage * limit)
              .map((coin, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {coin.name}
                  </TableCell>
                  <TableCell align="center">
                    {formatPrice(coin.priceChange.price)}$
                  </TableCell>
                  <TableCell align="center">
                    {coin.priceChange.volume24h}
                  </TableCell>
                  <TableCell align="center">{coin.marketCap}</TableCell>
                  <TableCell align="center">{coin.rank}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
